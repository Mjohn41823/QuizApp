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
        let userText = $(".js-shopping-list-entry").val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">Sample</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`);
    });
}


$(addClick);
$(deleteItems);
$(addItems);
