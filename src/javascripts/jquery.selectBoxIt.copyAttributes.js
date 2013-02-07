// Copy Attributes Module
// ======================

// addSelectBoxAttributes
// ----------------------
//      Add's all attributes (excluding id, class names, and the style attribute) from the default select box to the new drop down

$.selectBox.selectBoxIt.prototype._addSelectBoxAttributes = function() {

    // Stores the plugin context inside of the self variable
    var self = this;

    // Add's all attributes to the currently traversed drop down option
    self._addAttributes(self.selectBox.prop("attributes"), self.dropdown);

    // Add's all attributes to the drop down items list
    self.selectItems.each(function(iterator) {

        // Add's all attributes to the currently traversed drop down option
        self._addAttributes($(this).prop("attributes"), self.listItems.eq(iterator));

    });

    // Maintains chainability
    return self;

};        

// addAttributes
// -------------
//  Add's attributes to a DOM element
$.selectBox.selectBoxIt.prototype._addAttributes = function(arr, elem) {

    // Stores the plugin context inside of the self variable
    var self = this,
        blacklist = [

            "null",

            "value",

            "disabled",

            "id",

            "class",

            "unselectable"

        ];

    // If there are array properties
    if(arr.length) {

        // Iterates over all of array properties
        $.each(arr, function(iterator, property) {

            // Get's the property name and property value of each property
            var propName = (property.name).toLowerCase(), propValue = property.value;

            // If the currently traversed property is not on the blacklist and the value is not "null"
            if(propValue !== "null" && $.inArray(propName, blacklist) === -1) {

                // Set's the currently traversed property on element
                elem.attr(propName, propValue);

            }

        });

    }

    // Maintains chainability
    return self;

};