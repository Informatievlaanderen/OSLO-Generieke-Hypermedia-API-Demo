<template>
    <div>
        <vl-title tag="h1">Test de bouwblokken hier uit!</vl-title>
        <vl-grid mod-stacked>
            <vl-column width="6">
                <vl-title tag-name="h4">
                    URL
                </vl-title>
                <vl-input-field v-model="URL" v-bind:class="{'vl-input-field--error': noURLError}" mod-block/>
            </vl-column>
            <vl-column width="6">
                <vl-title tag-name="h4">
                    Kies een bouwblok
                </vl-title>
                <vl-select
                        mod-block
                        name="select-2" id="select-2"
                        placeholder-text="Selecteer een bouwblok"
                        v-model="buildingBlock"
                        @input="selectChange">
                    <option value="pagination">
                        Paginering
                    </option>
                    <option value="crud">
                        CRUD-operaties
                    </option>
                    <option value="language">
                        Taal-selectie/ontdekking
                    </option>
                </vl-select>
            </vl-column>
            <vl-column width="6">
                <vl-button @click="execute">Demo!</vl-button>
            </vl-column>
            <vl-column v-if="this.buildingBlock === 'language'" width="6">
                <vl-input-field v-model="acceptLanguageHeader" v-bind:class="{'vl-input-field--error' : noAcceptLanguageHeader}" placeholder="Geef een Accept-Language header mee" mod-block/>
                <!--<vl-alert
                        icon="warning"
                        title="Ter informatie">
                    Bij dit bouwblok wordt een 'Accept-Language'-header verwacht. De browser overschrijft echter de waarde die wordt meegestuurd, met zijn eigen waarde.
                    De waarde van de meegestuurde header is dus afhankelijk van je browser.
                </vl-alert>-->
            </vl-column>
            <vl-column/>
            <vl-column width="6" v-if="resultIsReady">
                <vl-textarea rows="15" id="textarea" v-model="resultText" mod-disabled mod-block></vl-textarea>
            </vl-column>
        </vl-grid>
    </div>
</template>

<script>
    import { ApiClient, PaginationHandler, LanguageHandler, CRUDHandler } from 'generic-hypermedia-api-client';
    export default {
        name: "Demo",
        data() {
            return {
                buildingBlock: '',
                resultText: '',
                URL: '',
                noURLError: false,
                acceptLanguageHeader: '',
                noAcceptLanguageHeader: false,
                showInfoMessage: false,
                resultIsReady: false
            }
        },
        methods: {
            async execute(){
                this.noURLError = this.URL === '';

                if(!(this.noURLError = this.URL === '')){
                    let controls;

                    if(this.buildingBlock === 'language' && (this.noAcceptLanguageHeader = this.acceptLanguageHeader === '')){
                        return;
                    }

                    // When pagination or crud is selected, this.acceptLanguageHeader will be empty, but that's not a problem
                    controls = await new Promise(resolve => {
                        const client = new ApiClient(null);
                        const handler = this.setHandler(client, resolve, this.acceptLanguageHeader);
                        client.fetch(this.URL, [handler])
                    });

                    //TODO: just showing plain link
                    //this.addClickableURLs(controls);

                    this.resultText = JSON.stringify(controls, null, 4).replaceAll(/\\"/g, '"')
                    this.resultIsReady = true;
                }
            },
            selectChange(){
                // We don't show the message yet.

                //this.showInfoMessage = this.buildingBlock === 'language';
            },
            setHandler(client, resolve, acceptLanguageHeader){
                let handler;
                switch (this.buildingBlock) {
                    case 'pagination':
                        handler = new PaginationHandler({
                            pagedataCallback: (data) => {resolve(data)},
                            subjectStream: client.subjectStream
                        });
                        break;
                    case 'language':
                        handler = new LanguageHandler({
                            languageCallback: (language) => {
                                language.stream.on('data', data => {
                                    if(typeof data === 'object'){
                                        resolve(data);
                                    }
                                })
                            },
                            acceptLanguageHeader: acceptLanguageHeader
                        });
                        break;
                    case 'crud':
                        handler = new CRUDHandler({
                            crudCallback: (crud) => resolve(crud)
                        });

                }
                return handler
            },
            addClickableURLs(controls){
                if(this.buildingBlock === 'pagination'){
                    for(let prop in controls){
                        if(controls[prop]){
                            controls[prop] = controls[prop].link(controls[prop]);
                        }
                    }
                } else if(this.buildingBlock === 'crud'){
                    for(let index in controls){
                        if(controls[index].expects){
                            controls[index].expects = controls[index].expects.link(controls[index].expects);
                        }
                    }
                } else {
                    // Ok for now, may fix this in the future
                    for(let prop in controls){
                        if(controls[prop] && typeof controls[prop] === "object"){
                            for(let p in controls[prop]){
                                let value = String(controls[prop][p]);
                                if(value.indexOf('http') >= 0){
                                    controls[prop][p] = controls[prop][p].link(controls[prop][p]);
                                }
                            }
                        }
                    }
                }
            }
        },
        watch: {
            URL: function(){
                this.noURLError = this.URL === '';
            }
        }
    }
</script>

<style lang="scss">
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-icon/src/scss/icon";
    @import "~@govflanders/vl-ui-input-field/src/scss/input-field";
    @import "~@govflanders/vl-ui-select/src/scss/select";
    @import "~@govflanders/vl-ui-button/src/scss/button";
    @import "~@govflanders/vl-ui-textarea/src/scss/textarea";
    @import "~@govflanders/vl-ui-alert/src/scss/alert";

    #textarea {
        resize: none;
    }
</style>
