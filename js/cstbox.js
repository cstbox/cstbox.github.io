var navbarContent = {
    "home" : ["Home", "index.html"],
    "exec" : ["Executive summary", "executive-summary.html"],
    "key" : ["Key points", "keypoints.html"],
    "dev" : ["Developpers' corner", "developpers.html"],
    "pub" : ["Publications", "publications.html"]
};

$(document).ready(function(){
    var body = $('body');

    add_navbar(body);
    add_footer(body);
    format_header();
    format_docsnav();

    function add_navbar(body) {
        var current = body.attr('id')
        body.prepend(
            '<div class="navbar navbar-inverse navbar-fixed-top">' +
            '<div class="navbar-inner">' +
            '<div class="container">' +
            '<div class="nav-collapse collapse">' +
            '<ul id="navbar" class="nav"></ul>' +
            '<ul id="extra" class="nav">' +
            '<li><a id="contact" href="mailto:cstbox@cstb.fr">Contact us</a></li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
        var ul = $("ul#navbar");
        $.each(navbarContent, function(key, content) {
            var clazz = (key == current) ? " class='active'" : '';
            var label = content[0];
            var link = content[1];        
            ul.append("<li" + clazz + "><a href='" + link + "'>" + label + "</a></li>");
        });
    }
    
    function add_footer(body) {
        $.ajax({
            url : 'footer.html',
            success : function(data, textStatus, jqXHR) {
                body.append(data);
            }
        });
    }
    
    function format_header() {
        var header = $('header');
        var title = header.find('h1');
        var descr = header.find('p');
        header
            .wrapInner('<div class="container wide"></div>')
            .addClass('jumbotron subhead')
            .attr('id', 'overview');
        descr.addClass('lead');
    }
    
    function format_docsnav() {
        var div = $('#docsnav');
        div.addClass('span3 bs-docs-sidebar');
        var ul = div.find('ul');
        ul
            .addClass('nav nav-list bs-docs-sidenav')
            .attr({'data-spy' : 'affix', 'data-offset-top' : '200'});
        ul.children('li').each(function(i){
            var li = $(this);
            var href = li.attr('href');
            li.removeAttr('href');
            li.prepend('<i class="icon-chevron-right"></i>');
            li.wrapInner('<a href="' + href + '"></a>');
        });
        
    }
});

