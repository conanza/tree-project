class DataService {
  constructor ($q) {
    this.$q = $q;
  }

  fetchData () {
    return data;
  }

  readData (file) {
    let deferred = this.$q.defer();
    let reader = new FileReader();

    reader.onloadend = ev => {
      if (reader.readyState === reader.DONE) {
        deferred.resolve(reader.result);
      }
    };
    reader.readAsText(file);

    return deferred.promise;
  }
}

angular
  .module('explorer')
  .service('DataService', DataService);

data = {
  "children": [
    {
      'name': 'test file',
      'type': 'file'
    },
    {
      "name": "Main Folder",
      "type": "folder",
      "children": [
        {
          "name": "Sub Folder 1",
          "type": "folder",
          "children": [
            {
              "name": "Nested Folder",
              "type": "folder",
              "children": [
                {
                  "name": "Super Nested Folder",
                  "type": "folder",
                  "children": [
                    {
                      "name": "Deep File",
                      "type": "file"
                    },
                    {
                      "name": "Deep File 2",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Empty Folder",
              "type": "folder"
            },
            {
              "name": "Simple Folder",
              "type": "folder",
              "children": [
                {
                  "name": "File",
                  "type": "file",
                }
              ]
            },
            {
              "name": "Empty Folder",
              "type": "folder"
            },
            {
              "name": "Nested File",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "Private folder",
      "type": "folder",
      "private": true,
      "children": [
        {
          "name": "Private document",
          "type": "file"
        },
        {
          "name": "Another folder",
          "type": "folder",
          "children" : [
            {
              "name": "Super secret document",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "Empty Folder",
      "type": "folder"
    },
    {
      "name": "Empty Folder",
      "type": "folder"
    },
    {
      "name": "Simple Folder",
      "type": "folder",
      "children": [
        {
          "name": "File",
          "type": "file",
        }
      ]
    },
    {
      "name": "Poorly Named Folder",
      "type": "folder",
      "children": [
        {
          "name": "Extremely long file name 3847283948383837472738690283472394256982734982349871203984569872340981234",
          "type": "file",
        }
      ]
    }
  ]
};
