/**
 * Restore a template
 */
restoreTemplate = function()
{
    var objectID = $(this).attr("objectid");
    restore_template(objectID);
}

/**
 * AJAX call, restores an object
 * @param objectID id of the object
 */
restore_template = function(objectID){
    $.ajax({
        url : restoreTemplatePostUrl,
        type : "GET",
        data: {
            id: objectID
        },
        success: function(data){
            location.reload();
        }
    });
}

/**
 * Load controllers for template management
 */
$(document).ready(function() {
    $('.retrieve').on('click',restoreTemplate);
});
