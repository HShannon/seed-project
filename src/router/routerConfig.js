const routers = [];
function getAllPath() {
  let result = [];
  function allPath(route, pre) {
    if (Array.isArray(routers)) {
      routers.forEach(it => {
        if (it.children) {
          allPath(it.children, it.path);
        } else {
          let url = it.path ? (pre ? `${pre}/${it.path}` : `${it.path}`) : `${pre}`
          result.push(url);
        }
      })
    }
  }
  allPath(routers, '');
  return result;
}
const paths = getAllPath();
export {routers, paths} 