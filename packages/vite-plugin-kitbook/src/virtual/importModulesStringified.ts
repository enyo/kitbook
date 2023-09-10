export default `import { groupColocatedModulesIntoPages, pagesStore } from "kitbook";
const modules = import.meta.glob(["REPLACE_WITH_MODULE_GLOBS"]);
const rawModules = import.meta.glob(["REPLACE_WITH_MODULE_GLOBS"], { as: "raw" });
export const pages = groupColocatedModulesIntoPages(modules, rawModules);
if (import.meta.hot) {
    import.meta.hot.accept((updatedModuleImport) => {
        if (updatedModuleImport?.pages) {
            pagesStore.set(updatedModuleImport.pages);
        }
    });
}`