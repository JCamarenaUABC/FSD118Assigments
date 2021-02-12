(function(window, undefined) {
  var dictionary = {
    "800905ed-957d-4763-a594-0ee2620dbc37": "Login",
    "91009be8-9e3f-4a78-868e-e0932e586ef6": "Maps",
    "2a4e377b-6880-46ba-9fad-40995f13de8b": "SingUp",
    "bf5418fe-7d97-4fc1-97e9-f92a43d4c41f": "CatalogUsersAdd",
    "e6c8d899-5508-4859-a003-f77f5c9a11e1": "DoctorCatalogAdd",
    "80f423c2-3068-47c2-b1ed-9a1d9dc449f8": "ListaBusqueda",
    "6946ccb1-ca64-40b6-9622-748f63aa3fc4": "CatalogDoctor",
    "16428e1b-5332-49a0-af6e-de4b356afad1": "MenuExtendido",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "03e9a489-c591-4a1a-ae8b-aef034e296af": "test",
    "5b141810-397f-482e-94e6-e189708db172": "CatalogUser",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);