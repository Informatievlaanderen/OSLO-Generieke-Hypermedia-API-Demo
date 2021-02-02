import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import {
  VlCore,
  VlUtil,
  VlGrid,
  VlRegion,
  VlLayout,
  VlColumn,
  VlContentHeader,
  VlContentHeaderLogo,
  VlContentHeaderEntity,
  VlContentHeaderTitle,
  VlIntroduction,
  VlSideNavigation,
  VlSideNavigationList,
  VlSideNavigationItem,
  VlTitle,
  VlInfoTile,
  VlEqualHeight,
  VlBadge,
  VlIcon,
  VlInputField,
  VlSelect,
  VlButton,
  VlTextarea,
  VlAlert
} from'@govflanders/vl-ui-vue-components';
import router from "./router/route";

Vue.component('vl-grid', VlGrid);
Vue.component('vl-region', VlRegion);
Vue.component('vl-layout', VlLayout);
Vue.component('vl-column', VlColumn);
Vue.component('vl-content-header', VlContentHeader);
Vue.component('vl-content-header-logo', VlContentHeaderLogo);
Vue.component('vl-content-header-entity', VlContentHeaderEntity);
Vue.component('vl-content-header-title', VlContentHeaderTitle);
Vue.component('vl-introduction', VlIntroduction)
Vue.component('vl-side-navigation', VlSideNavigation);
Vue.component('vl-side-navigation-list', VlSideNavigationList);
Vue.component('vl-side-navigation-item', VlSideNavigationItem);
Vue.component('vl-title', VlTitle);
Vue.component('vl-info-tile', VlInfoTile);
Vue.component('vl-badge', VlBadge);
Vue.component('vl-icon', VlIcon);
Vue.component('vl-input-field', VlInputField);
Vue.component('vl-select', VlSelect);
Vue.component('vl-button', VlButton);
Vue.component('vl-textarea', VlTextarea);
Vue.component('vl-alert', VlAlert);

Vue.directive('vl-equal-height', VlEqualHeight);

Vue.use(VlCore);
Vue.use(VlUtil);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
