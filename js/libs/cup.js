/**
 * A better interface for storage(http://dev.w3.org/html5/webstorage/#storage-0).
 *
 * By imwilsonxu(http://imwilsonxu.net)
 */

window.cup = {

    _storage: null,

    key: function(index) {
        return this._storage.key(index);
    },

    keys: function() {
        var keys = [];
        for (var i = 0; i < this._storage.length; i++) {
            keys.push(this.key(i));
        }
        return keys;
    },

    get: function(key) {
        return this._storage.getItem(key);
    },

    set: function(key, val) {
        this._storage.setItem(key, val);
    },

    del: function(key) {
         this._storage.removeItem(key);
    },

    clear: function() {
        this._storage.clear();
    },

    init: function() {
        try {
            if ("localStorage" in window) {
                this._storage = window.localStorage;
                this.length = this._storage.length;
            }
        } catch(ex) {
            console.log('No support localStorage');
        }
    }
};
window.cup.init();
