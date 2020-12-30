import * as ShaderGraph from '../../shadergraph/build/shadergraph.js'

function factory(snippets: any) {
    function fetch(name: string) {
      var element, ref, s, sel, _ref;
      s = snippets[name];
      if (s != null) {
        return s;
      }
      ref = (_ref = name[0]) === '#' || _ref === '.' || _ref === ':' || _ref === '[';
      sel = ref ? name : "#" + name;
      element = document.querySelector(sel) as HTMLElement;
      if ((element != null) && element.tagName === 'SCRIPT') {
        return element.textContent || element.innerText;
      }
      throw new Error("Unknown shader `" + name + "`");
    };
    return new ShaderGraph(fetch, {
      autoInspect: true
    });
  };

export default factory;
