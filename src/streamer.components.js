/*
 * Core components for 
 * Steamer.js
 */
var panelComponent = function (id, arComponents) {
    var text = "";
    _.forEach(arComponents, function (x) {
        if (x && x.html) {
            text += x.html;
        }
    })

    return {
        id: id,
        html: window.str.compiler(window.str.templates["panelComponent"], { id: id, text: text })
    }
};

var slidePanelComponent = function (id, arComponents) {
    var text = "";
    _.forEach(arComponents, function (x) {
        if (x && x.html) {
            text += x.html;
        }
    })

    radio(id + "_showing").subscribe(function (x) {
        $("#" + id + "_wrapper_inner").show();
        $("#" + id + "_show").hide();
        $("#" + id + "_hide").show();
        x.event = id + "_shown";
        radio(window.str.settings.broadcastChannel).broadcast(x);
    });

    radio(id + "_hiding").subscribe(function (x) {
        $("#" + id + "_wrapper_inner").hide();
        $("#" + id + "_show").show();
        $("#" + id + "_hide").hide();
        x.event = id + "_hidden";
        radio(window.str.settings.broadcastChannel).broadcast(x);
    });

    $(function () { $("#" + id + "_show").hide(); });

    return {
        id: id,
        html: window.str.compiler(window.str.templates["slidePanelComponent"], { id: id, text: text })
    }
};

var buttonComponent = function (id, text, tooltip) {
    radio(id + "_clicking").subscribe(function (x) {
        $("#" + x.id).blur();
        x.event = id + "_clicked";
        radio(window.str.settings.broadcastChannel).broadcast(x);
    });

    return {
        id: id,
        html: window.str.compiler(window.str.templates["buttonComponent"], { id: id, text: text, tooltip: tooltip })
    }
};
var toggleButtonComponent = function (id, text, tooltip) {
    radio(id + "_clicking").subscribe(function (x) {
        $("#" + x.id).toggleClass(window.str.settings.buttonClassOn);
        $("#" + x.id).toggleClass(window.str.settings.buttonClassOff);
        $("#" + x.id).blur();
        x.event = id + "_clicked";
        x.state = $("#" + x.id).hasClass(window.str.settings.buttonClassOn) ? "0" : "1";
        radio(window.str.settings.broadcastChannel).broadcast(x);
    });

    return {
        id: id,
        html: window.str.compiler(window.str.templates["buttonComponent"], { id: id, text: text, tooltip: tooltip })
    }
};
var searchComponent = function (id, text, tooltip) {
    radio(id + "_clicking").subscribe(function (x) {
        $("#" + x.id).slideToggle();
        $("#" + x.id).focus();
        x.event = id + "_clicked";
        x.value = $("#" + id).val();
        radio(window.str.settings.broadcastChannel).broadcast(x);
    });

    radio(id + "_keydown").subscribe(function (x) {
        x.event = id + "_keydown";
        x.value = $("#" + id).val();
        radio(window.str.settings.broadcastChannel).broadcast(x);
    })

    $(function () { $("#" + id).hide() })

    return {
        id: id,
        html: window.str.compiler(window.str.templates["searchComponent"], { id: id, text: text, tooltip: tooltip })
    }
};

var dropdownComponent = function (id, arComponents) {
    _.forEach(arComponents, function (c) {

        radio(c.id + "_clicking").subscribe(function (x) {
            var src = $("#" + c.id).html();
            $("#" + id + "_selected").html(src);
            radio(window.str.settings.broadcastChannel).broadcast({ id: c.id, parentId: id });
        })
    })

    return {
        html: window.str.compiler(window.str.templates["dropdownComponent"], { id: id, components: arComponents })
    }
}