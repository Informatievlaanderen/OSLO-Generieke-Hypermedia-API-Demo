<template>
    <vl-grid>
        <vl-column width="8">
            <vl-introduction>
                Een Generieke Hypermedia API beschrijft in elke respons de verdere stappen die vanaf dat punt kunnen
                worden genomen met behulp van Hypermedia Controls. Een client kan vervolgens een generieke afhandeling
                voorzien voor elk van deze bouwblokken. Een client kan vervolgens een generieke afhandeling voorzien
                voor elk van deze bouwblokken. Op deze manier kan een strikte koppeling tussen client en server vermeden
                worden.
            </vl-introduction>
        </vl-column>
        <vl-column width="4">
            <vl-side-navigation title="Op deze pagina">
                <vl-side-navigation-list>
                    <vl-side-navigation-item href="#specs" text="Bouwblokken"/>
                    <vl-side-navigation-item href="#demo" text="Demo"/>
                </vl-side-navigation-list>
            </vl-side-navigation>
        </vl-column>
    </vl-grid>
</template>

<script>
    export default {
        name: "Introduction"
    }
</script>

<style lang="scss">
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-introduction/src/scss/introduction";
    @import "~@govflanders/vl-ui-side-navigation/src/scss/side-navigation";
</style>
