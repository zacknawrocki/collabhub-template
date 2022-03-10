export default {
  props: ["mirror", "drawMode", "connected"],

  template: `
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="./assets/logo.png" width="50" class="mr-3">
                <h6 class="ms-2 mb-0">CollabHub</h6>
            </a>
            
            <div v-show="!connected" class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            <div>
                <div class="form-check form-switch">
                    <label class="form-check-label text-white small">{{drawMode ? "Draw" : "Code"}}</label>
                    <input class="form-check-input" type="checkbox" :checked="drawMode" @click="$emit('drawMode')">
                </div>
                <div class="form-check form-switch">
                    <label class="form-check-label text-white small">Mirror</label>
                    <input class="form-check-input" type="checkbox" :checked="mirror" @click="$emit('toggle')">
                </div>
            </div>
        </div>
    </nav>
    `,
};
