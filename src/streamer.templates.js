window.str = window.str || {};

window.str.templates = {};

window.str.templates["buttonComponent"] = [
    "<span id='{{id}}_wrapper'> ",
    "    <button class='{{settings.buttonClass}} {{settings.buttonClassOn}}' id='{{id}}' ",
    "    title='{{tooltip}}' ",
    "    onmouseover='radio(\"{{id}}_mouseover\").broadcast({id:\"{{id}}\"})' ",
    "    onmouseout='radio(\"{{id}}_mouseout\").broadcast({id:\"{{id}}\"})'",
    "    onclick='radio(\"{{id}}_clicking\").broadcast({id:\"{{id}}\"})'>",
    "    {{{text}}}",
    "    </button>",
    "</span>",
].join('\n');

window.str.templates["panelComponent"] = [
    "<span id='{{id}}_wrapper'>",
    "   <span onmouseover='radio(\"{{id}}_mouseover\").broadcast({id:\"{{id}}\"})'",
    "   onmouseout='radio(\"{{id}}_mouseout\").broadcast({id:\"{{id}}\"})'",
    "   id='{{id}}'>{{{text}}}</span>",
    "</span>",
    ].join('\n');

window.str.templates["slidePanelComponent"] = [
    "<span id='{{id}}_wrapper'>",
    "  <span id='{{id}}_show' class=\"panel-hide {{settings.buttonClass}} {{settings.buttonClassOff}}\" onclick=\"radio('{{id}}_showing').broadcast({id:'{{id}}'})\">",
    "   <span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>",
    "  </span>",
    "  <span id='{{id}}_hide' class='panel-show {{settings.buttonClass}} {{settings.buttonClassOn}}' onclick=\"radio('{{id}}_hiding').broadcast({id:'{{id}}'})\">",
    "     <span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>",
    "  </span>",
    "  <span id='{{id}}_wrapper_inner'>",
    "  <span onmouseover='radio(\"{{id}}_mouseover\").broadcast({id:\"{{id}}\"})'",
    "    onmouseout='radio(\"{{id}}_mouseout\").broadcast({id:\"{{id}}\"})'",
    "    id='{{id}}'>{{{text}}}</span>",
    "    </span>",
    "  </span>"
].join('\n');

window.str.templates["searchComponent"] = [
    "  <span id='{{id}}_wrapper'>",
    "     <input type='text' ",
    "       title='{{tooltip}}' ",
    "       onkeydown=\"radio('{{id}}_keydown').broadcast({id:'{{id}}'})\" ",
    "       id='{{id}}' />",
    "       <span id='{{id}}_icon' ",
    "       title='{{tooltip}}' ",
    "       class='{{settings.buttonClass}} {{settings.buttonClassOn}}' ",
    "       onclick=\"radio('{{id}}_clicking').broadcast({id:'{{id}}'})\">",
    "      <span class='glyphicon glyphicon-search' aria-hidden='true'></span> ",
    "      </span>",
    "    </span>"
].join('\n');

window.str.templates["dropdownComponent"] = [
    " <span id='{{id}}_wrapper'> ",
    " <span class='dropdown'> ",
    " <button class='{{settings.buttonClass}} {{settings.buttonClassOn}} dropdown-toggle' ",
    " type='button' id='{{id}}' ",
    " data-toggle='dropdown' ",
    " aria-haspopup='true' ",
    " aria-expanded='true'> ",
    " <span id='{{id}}_selected'></span> ",
    " <span class='caret'></span> ",
    " </button> ",
    " <ul class='dropdown-menu' ",
    " aria-labelledby='{{id}}_dropdownMenu' ",
    " style='min-width:0px'> ",
    " {{#each components}} ",
    " <li> ",
    " <a>{{{this.html}}}</a>",
    " </li>",
    " {{/each}} ",
    " </ul> ",
    " </span>" ,
    " </span>",
    " ",
    " " 
].join('\n');
             
          
                    
                    

            
        