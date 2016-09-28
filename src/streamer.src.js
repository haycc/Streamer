/*
 * Core functions for 
 * Steamer.js
 */
window.str = window.str || {};
window.str.compiler = function (source, params) {
    var template = Handlebars.compile(source);
    params.settings = window.str.settings;
    var html = template(params);
    return html;
}

window.str.settings = {
    buttonClass: "btn btn-sm",
    buttonClassOn: "btn-info",
    buttonClassOff: "btn-warning",
    broadcastChannel: "streamer"
}

window.str.streamer = function (settings) {
    
    window.str.settings = settings || window.str.settings;

    var _rtn = {};
    _rtn.registerComponent = function (name, component) {
        _rtn["add" + name] = component;
    };
    _rtn.registerComponent("Button", buttonComponent);
    _rtn.registerComponent("Panel", panelComponent);
    _rtn.registerComponent("ToggleButton", toggleButtonComponent);
    _rtn.registerComponent("Search", searchComponent);
    _rtn.registerComponent("Dropdown", dropdownComponent);
    _rtn.registerComponent("SlidePanel", slidePanelComponent);

    return _rtn;
}


