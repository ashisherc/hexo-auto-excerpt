hexo.extend.filter.register('after_post_render', function (data) {
    var excerptLength = hexo.config.excerpt_length || 300;
    var excerpt = data.content.substr(0, excerptLength);
    data.excerpt = excerpt;
    return data;
});