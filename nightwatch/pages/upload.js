module.exports = {
    commands: [],
    elements: {
        'communityTitle':  {
            selector: "#deposit-form div.page-subheader-element:nth-last-child(2)"
        },
    },
    url: function() {
        return this.api.launch_url + '/uploads/new'
    }
}