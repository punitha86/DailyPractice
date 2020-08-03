import java.util.Scanner;

public class BankTransactions {
    int balance;
    int previousTransaction;
    String customerName;
    String customerId;
    public BankTransactions (String cname, String cid){
        customerName = cname;
        customerId = cid;
    }
    void deposit(int amount){
        if(amount != 0)
        {
            balance = balance + amount;
            previousTransaction = amount;
        }
    }

    void withdrawal(int amount){
        if(amount != 0)
        {
            balance = balance - amount;
            previousTransaction = -amount;
        }
    }

    void getPreviousTransaction(){
        if(previousTransaction > 0){
            System.out.println("Deposited: " + previousTransaction);
        }else  if(previousTransaction < 0){
            System.out.println("Withdrawn: "+ Math.abs(previousTransaction));
        } else
            System.out.println("No transaction occured");
    }

    void showMenu(){
        char option = '\0';
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome " + customerName + "(" + customerId + ")");
        System.out.println("A. Check Balance");
        System.out.println("B. Deposit");
        System.out.println("C. Withdraw");
        System.out.println("D. Show Last transaction");
        System.out.println("E. Exit");

        do {
            System.out.println("Enter an option:");
            option = scanner.next().charAt(0);

            switch(option) {
                case 'A':
                    System.out.println("Balance =" + balance);
                    System.out.println("\n");
                    break;
                case 'B':
                    System.out.println("Enter an amount to deposit:");
                    int amount = scanner.nextInt();
                    deposit(amount);
                    break;
                case 'C':
                    System.out.println("Enter an amount to withdraw:");
                    amount = scanner.nextInt();
                    withdrawal(amount);
                    break;
                case 'D':
                    //System.out.println("Enter an amount to deposit:");
                    //int amount = scanner.nextInt();
                    getPreviousTransaction();
                    break;
                case 'E':
                    break;
                default:
                    System.out.println("Please try again!!");
                    break;
            }
        }while(option != 'E');

        }

    }

