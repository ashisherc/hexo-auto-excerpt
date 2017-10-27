(function(){
    const sanitize = function (excerpt) {
        let lGt = excerpt.lastIndexOf('>');
        let lLt = excerpt.lastIndexOf('<');
        if (lGt > lLt) {
            return excerpt;
        }
        else {
            return excerpt.substr(0, lLt - 1);
        }
    }
    
    hexo.extend.filter.register('after_post_render', function (data) {
        var excerptLength = hexo.config.excerpt_length || 300;
        var excerpt = data.content.substr(0, excerptLength);
        var cleanExcerpt = sanitize(excerpt);
        data.excerpt = cleanExcerpt;
        return data;
    });
})();