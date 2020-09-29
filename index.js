function addClick() {
    $('ul').on('click', 'button.shopping-item-toggle', event => {
        event.preventDefault();
        event.stopPropagation();
        $(event.target).closest('li').find('.shopping-item').addClass('shopping-item__checked');
    });
}


function deleteItems() {
    $('ul').on('click', 'button.shopping-item-delete', event => {
        event.preventDefault();
        event.stopPropagation();
        $(event.target).closest('li').remove();
    });
}

function addItems() {
    $('#js-shopping-list-form').on('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        let inputVal = $(".js-shopping-list-entry").val();
        $('ul.shopping-list').append("<li>
        <span class="shopping-item">${inputVal}</li>")
    });
}


$(addClick);
$(deleteItems);
$(addItems);
