<template>
    <vl-layout>
        <vl-title tag-name="h1">Bouwblokken</vl-title>
        <vl-grid mod-stacked v-vl-equal-height:container>
            <vl-column width="10">
                <p>
                    Een implementatie van de Generieke Hypermedia API specificatie is vrij om te kiezen welke
                    bouwblokken relevant
                    zijn voor de implementatie. Bijvoorbeeld, indien een API geen paginering functionaliteit aanbiedt,
                    dan hoeft het
                    corresponderende bouwblok niet geïntegreerd te worden om conform deze specificatie te zijn. Er werden reeds 3
                    bouwblokken geïmplementeerd. De volledige specificatie kan <a href="https://github.com/Informatievlaanderen/generieke-hypermedia-api">hier</a> teruggevonden worden.
                </p>
            </vl-column>
            <vl-column width="10">
                <vl-info-tile
                        href="https://github.com/Informatievlaanderen/generieke-hypermedia-api/blob/master/paginering.md#server-side-paginering"
                        title="Paginering"
                        subtitle="Server-side paginering wordt gebruikt om datasets die ontsloten worden via API's op te delen in kleinere
                                resultsets om zo een lagere laadtijd te bekomen voor afnemers."
                />
            </vl-column>
            <vl-column width="10">
                <vl-info-tile
                        href="https://github.com/Informatievlaanderen/generieke-hypermedia-api/blob/master/crud-operaties.md#crud-operaties"
                        title="CRUD-operaties"
                        subtitle="Create, Read, Update & Delete of kortweg CRUD zijn de vier basisoperaties die op resources kunnen
                                  uitgevoerd worden. Met deze bouwblok kan achterhaald worden welke operaties worden toegelaten op een resource."
                />
            </vl-column>
            <vl-column width="10">
                <vl-info-tile
                        href="https://github.com/Informatievlaanderen/generieke-hypermedia-api/blob/master/taal.md"
                        title="Taal-selectie/ontdekking"
                        subtitle="De detectie van de taal van een bepaalde resource is belangrijk voor clients met
                        taal-afhankelijke functionaliteiten, zoals bijvoorbeeld het samenvatten en beschrijven van
                        bepaalde resources afhankelijk van de taal van de gebruiker. De selectie van een taal gaat een stap verder.
                        Hierbij kunnen protocollen zoals HTTP language negotiation door clients gebruikt worden om een
                        bepaalde resource in een gegeven taal op te vragen"
                />
            </vl-column>
            <vl-column>
                <vl-title tag-name="h3">
                    Zelf aan de slag?
                </vl-title>
            </vl-column>
            <vl-column width="5">
                <vl-info-tile href="https://github.com/Informatievlaanderen/generic-hypermedia-api-client#readme"
                              title="Generieke Hypermedia API client"
                              subtitle="Bovenstaande bouwblokken zijn beschikbaar via deze package"
                              v-vl-equal-height>
                    <vl-badge slot="badge" icon="document-small" mod-medium mod-accent/>
                </vl-info-tile>
            </vl-column>
            <vl-column width="5">
                <vl-info-tile href="https://github.com/Informatievlaanderen/generic-hypermedia-api-client-testserver/blob/master/README.md#generic-hypermedia-api-client-testserver"
                              title="Generieke Hypermedia API server"
                              subtitle="Deze server biedt gebruikers de mogelijkheid om de bouwblokken uit te testen door test data terug te sturen"
                              v-vl-equal-height>
                    <vl-badge slot="badge" icon="document-small" mod-medium mod-accent/>
                </vl-info-tile>
            </vl-column>
        </vl-grid>
    </vl-layout>
</template>

<script>
    export default {
        name: "Specification"
    }
</script>

<style lang="scss">
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-titles/src/scss/titles";
    @import "~@govflanders/vl-ui-info-tile/src/scss/info-tile";
    @import "~@govflanders/vl-ui-badge/src/scss/badge";

</style>
