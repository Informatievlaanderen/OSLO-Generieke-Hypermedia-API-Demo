<template>
    <div id="app">
        <vl-content-header
                mod-large
                mod-show-mobile
                mod-context
                :background="{
            src: '//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg',
            srcset: '//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_mobile_alt/header.jpg 320w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg 1024w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_wide_alt/header.jpg 1600w',
            alt: 'OSLO Content Header',
          }">
            <div class="vl-content-header__logo-wrapper">
                <vl-content-header-entity
                        prefix="Informatie"
                        title="Vlaanderen"
                        logo="true"
                        href="https://data.vlaanderen.be/doc/organisatie/OVO002949"
                        mod-small/>
            </div>
            <vl-content-header-title
                    title="OSLO Generieke Hypermedia API"
                    tag-name="h1"
                    href="https://github.com/Informatievlaanderen/generieke-hypermedia-api"
                    :context="{
                href: 'https://overheid.vlaanderen.be/producten-diensten/oslo',
                title: 'OSLO',
              }"/>
        </vl-content-header>
        <vl-region>
            <vl-layout>
                <Introduction/>
            </vl-layout>
        </vl-region>
        <vl-region class="vl-region--alt">
            <Specification/>
        </vl-region>
        <vl-region>
            <vl-layout>
                <Demo/>
            </vl-layout>
        </vl-region>
    </div>
</template>

<script>
    import Introduction from "./Introduction";
    import Specification from "./Specification";
    import Demo from "./Demo";

    export default {
        name: "Home",
        components: {
            Introduction,
            Specification,
            Demo
        }
    }
</script>

<style scoped>

</style>
