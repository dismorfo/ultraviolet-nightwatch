module.exports = {
    commands: [],
    elements: {
        'communityTitle':  {
          selector: "#deposit-form div.page-subheader-element:nth-last-child(2)"
        },
        'fileUploadAlertMessages': {
          selector: ".file-upload-note .ui.visible.warning.message"
        },
    },
    url: function() {
        return this.api.launch_url + '/uploads/new'
    }
}
