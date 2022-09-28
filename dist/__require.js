
const modules = ['@vaadin/charts','@vaadin/dialog','@vaadin/dialog/lit.js','lit','lit-html','lit/decorators.js','tslib'];
export default function require(library) {
  const idx = modules.findIndex(
    (it) =>
      it === library ||
      it.replace(/^((@[^/]*\/)?[^/@]*)(@[^/]*)?(\/[^@]*)?$/, '$1$4') ===
        library // removes version pinned, if any
  );
  if (idx === -1) throw new Error(`Import ${library} not found in project scope: ${modules}`);
  return import(`https://srv.divriots.com/packd/@vaadin/charts@23.2.2,@vaadin/dialog@23.2.2,@vaadin/dialog@23.2.2/lit.js,lit,lit-html@next-major,lit/decorators.js,tslib`).then((module) => module['packd_export_'+idx]);
}