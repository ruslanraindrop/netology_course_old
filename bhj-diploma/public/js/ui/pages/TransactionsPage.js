/**
 * Класс TransactionsPage управляет
 * страницей отображения доходов и
 * расходов конкретного счёта
 * */
class TransactionsPage {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Ошибка! Передан пустой элемент');
    } else {
      this.element = element;
      this.registerEvents();
    }
  }

  /**
   * Вызывает метод render для отрисовки страницы
   * */
  update() {
    this.render(this.lastOptions);
  }

  /**
   * Отслеживает нажатие на кнопку удаления транзакции
   * и удаления самого счёта. Внутри обработчика пользуйтесь
   * методами TransactionsPage.removeTransaction и
   * TransactionsPage.removeAccount соответственно
   * */
  registerEvents() {
    this.element.addEventListener('click', (event) => {
      if (event.target.closest('.remove-account')) {
        this.removeAccount();
      } else if (event.target.closest('.transaction__remove')) {
        this.removeTransaction(event.target.dataset.id);
      }
    });
  }

  /**
   * Удаляет счёт. Необходимо показать диаголовое окно (с помощью confirm())
   * Если пользователь согласен удалить счёт, вызовите
   * Account.remove, а также TransactionsPage.clear с
   * пустыми данными для того, чтобы очистить страницу.
   * По успешному удалению необходимо вызвать метод App.update()
   * для обновления приложения
   * */
  removeAccount() {
    if (!this.lastOptions) {
      return
    }

    const question = confirm('Вы действительно хотите удалить счет?');
    if (question) {
      Account.remove(this.lastOptions.account_id, {}, (err, response) => {
        if (response && response.success) {
          App.update();
        } else {
          console.log(err);
        }
      });
    } else {
      return
    }
  }

  /**
   * Удаляет транзакцию (доход или расход). Требует
   * подтверждеия действия (с помощью confirm()).
   * По удалению транзакции вызовите метод App.update()
   * */
  removeTransaction( id ) {
    const question = confirm('Вы действительно хотите удалить эту транзакцию?');
    if (question) {
      Transaction.remove(id, {}, (err, response) => {
        if (response && response.success) {
          App.update();
        }
      });
    } else {
      return
    }
  }

  /**
   * С помощью Account.get() получает название счёта и отображает
   * его через TransactionsPage.renderTitle.
   * Получает список Transaction.list и полученные данные передаёт
   * в TransactionsPage.renderTransactions()
   * */
  render( options ) {
    if (!options) {
      return;
    }

    this.lastOptions = options;
    Account.get(options.account_id, {}, (err, response) => {
      if (response && response.success) {
        for (let i = 0; i < response.data.length; i++) {
          if (options.account_id == response.data[i].id) {
            this.renderTitle(response.data[i].name);
          }
        }
      } else {
        console.log(err);
      }
    });

    Transaction.list(options, (err, response) => {
      if (response && response.success) {
        this.renderTransactions(response.data);
      } else {
        console.log(err);
      }
    });

  }

  /**
   * Очищает страницу. Вызывает
   * TransactionsPage.renderTransactions() с пустым массивом.
   * Устанавливает заголовок: «Название счёта»
   * */
  clear() {
    this.renderTransactions([]);
    this.renderTitle('Название счета');
    this.lastOptions = null;
  }

  /**
   * Устанавливает заголовок в элемент .content-title
   * */
  renderTitle( name ) {
    this.element.querySelector('.content-title').textContent = name;
  }

  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */
  formatDate( date ) {
    const formattedDate = new Date(date).toLocaleString('ru', { month: 'long', year: 'numeric', day: 'numeric' })
    const time = new Date(date).toTimeString().substr(0,5);
    const result = `${formattedDate} в ${time}`
    return result;
  }

  /**
   * Формирует HTML-код транзакции (дохода или расхода).
   * item - объект с информацией о транзакции
   * */
  getTransactionHTML( item ) {
    // console.log(item);
    const date = this.formatDate(item.created_at);
    const type = item.type.toLowerCase();
    return `
    <div class="transaction transaction_${type} row">
      <div class="col-md-7 transaction__details">
          <div class="transaction__icon">
            <span class="fa fa-money fa-2x"></span>
          </div>
          <div class="transaction__info">
            <h4 class="transaction__title">${item.name}</h4>
            <div class="transaction__date">${date}</div>
          </div>
      </div>
      <div class="col-md-3">
        <div class="transaction__summ">
          ${item.sum} <span class="currency">₽</span>
        </div>
    </div>

    <div class="col-md-2 transaction__controls">
      <button class="btn btn-danger transaction__remove" data-id="${item.id}">
        <i class="fa fa-trash"></i>  
      </button>
    </div>
    `;
  }

  /**
   * Отрисовывает список транзакций на странице
   * используя getTransactionHTML
   * */
  renderTransactions( data ) {
    const transaction = this.element.querySelector('.content');
    if (data) {
      transaction.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        transaction.innerHTML += this.getTransactionHTML(data[i]);
      }
    }
  }
}
