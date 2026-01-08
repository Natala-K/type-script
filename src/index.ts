// src/index.ts
import { ITransaction, IAccount, ISummary, IAccountManager, TransactionType } from './types';

// Создаём реализацию счёта
const createAccount = (id: number, name: string): IAccount => {
  const transactions: ITransaction[] = [];

  return {
    id,
    name,
    
    addTransaction(transaction: ITransaction): void {
      // Проверяем уникальность ID транзакции
      const existingTransaction = transactions.find(t => t.id === transaction.id);
      if (existingTransaction) {
        throw new Error(`Transaction with id ${transaction.id} already exists`);
      }
      transactions.push(transaction);
    },
    
    removeTransactionById(transactionId: number): boolean {
      const initialLength = transactions.length;
      const index = transactions.findIndex(t => t.id === transactionId);
      if (index !== -1) {
        transactions.splice(index, 1);
        return true;
      }
      return false;
    },
    
    getTransactions(): ITransaction[] {
      return [...transactions]; // Возвращаем копию массива
    }
  };
};

// Создаём реализацию менеджера счетов
const createAccountManager = (): IAccountManager => {
  const accounts: IAccount[] = [];

  return {
    addAccount(account: IAccount): void {
      // Проверяем уникальность ID счёта
      const existingAccount = accounts.find(a => a.id === account.id);
      if (existingAccount) {
        throw new Error(`Account with id ${account.id} already exists`);
      }
      accounts.push(account);
    },
    
    removeAccountById(accountId: number): boolean {
      const index = accounts.findIndex(a => a.id === accountId);
      if (index !== -1) {
        accounts.splice(index, 1);
        return true;
      }
      return false;
    },
    
    getAccounts(): IAccount[] {
      return [...accounts]; // Возвращаем копию массива
    },
    
    getAccountById(id: number): IAccount | undefined {
      return accounts.find(account => account.id === id);
    },
    
    getSummary(accountId: number): ISummary {
      const account = this.getAccountById(accountId);
      if (!account) {
        throw new Error(`Account with id ${accountId} not found`);
      }
      
      const transactions = account.getTransactions();
      
      let income = 0;
      let expenses = 0;
      
      transactions.forEach(transaction => {
        if (transaction.type === 'income') {
          income += transaction.amount;
        } else if (transaction.type === 'expense') {
          expenses += transaction.amount;
        }
      });
      
      const balance = income - expenses;
      
      return { income, expenses, balance };
    }
  };
};

// Пример использования
const main = () => {
  console.log('=== Тестирование системы учета бюджета ===\n');

  // Создаём менеджер счетов
  const accountManager = createAccountManager();

  // Создаём счёт
  const mainAccount = createAccount(1, 'Основной счет');
  
  // Добавляем транзакции
  const transactions: ITransaction[] = [
    {
      id: 1,
      amount: 50000,
      type: 'income',
      date: new Date().toISOString(),
      description: 'Зарплата'
    },
    {
      id: 2,
      amount: 15000,
      type: 'expense',
      date: new Date().toISOString(),
      description: 'Аренда квартиры'
    },
    {
      id: 3,
      amount: 5000,
      type: 'expense',
      date: new Date().toISOString(),
      description: 'Продукты'
    },
    {
      id: 4,
      amount: 10000,
      type: 'income',
      date: new Date().toISOString(),
      description: 'Фриланс'
    }
  ];

  // Добавляем транзакции в счёт
  transactions.forEach(transaction => {
    mainAccount.addTransaction(transaction);
  });

  // Добавляем счёт в менеджер
  accountManager.addAccount(mainAccount);

  // Проверяем методы менеджера
  console.log('1. Все счета:');
  console.log(accountManager.getAccounts());
  
  console.log('\n2. Поиск счёта по ID:');
  const foundAccount = accountManager.getAccountById(1);
  console.log(foundAccount ? `Найден счет: ${foundAccount.name}` : 'Счет не найден');

  console.log('\n3. Транзакции на счете:');
  console.log(mainAccount.getTransactions());

  console.log('\n4. Сводная информация по счету:');
  const summary = accountManager.getSummary(1);
  console.log(summary);
  console.log(`Доходы: ${summary.income}`);
  console.log(`Расходы: ${summary.expenses}`);
  console.log(`Баланс: ${summary.balance}`);

  console.log('\n5. Тестирование удаления транзакции:');
  const removed = mainAccount.removeTransactionById(2);
  console.log(`Транзакция удалена: ${removed}`);
  
  console.log('\n6. Обновленная сводная информация:');
  const updatedSummary = accountManager.getSummary(1);
  console.log(updatedSummary);

  console.log('\n7. Тестирование удаления счета:');
  const accountRemoved = accountManager.removeAccountById(1);
  console.log(`Счет удален: ${accountRemoved}`);
  console.log(`Осталось счетов: ${accountManager.getAccounts().length}`);

  console.log('\n=== Тестирование завершено ===');
};

// Запускаем пример
if (require.main === module) {
  main();
}

// Экспортируем для возможного использования в других модулях
export { createAccount, createAccountManager };

