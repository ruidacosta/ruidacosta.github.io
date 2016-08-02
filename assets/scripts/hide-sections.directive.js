define(function(require) {

    function hideSections() {

        /**
         * @param {object} scope
         * @param {HTMLElement} element
         * @param {object []} element
         */
        function link() {
            var element = arguments[1];

            var elements = element[0].querySelectorAll('.fa-caret-down', '.fa-caret-right');

            angular.forEach(elements, function(element) {
                element.addEventListener("click", function(e) {
                    var current = e.target;
                    var header = e.target.parentNode.parentNode;
                    var item = header.nextSibling;

                    // select the .item element from the siblings
                    while (!item || !item.classList || !item.classList.contains('item')) {
                        item = item.nextSibling;
                    }

                    // hide or show the .item element
                    item.classList.toggle('none');
                    current.classList.toggle('fa-caret-right');
                    current.classList.toggle('fa-caret-down');
                }, false);
            })
        }

        return {
            link: link
        }
    }

    return hideSections;
});
