# Ajax Project Setup Guide with Laravel and Angular

This guide will explain how to set up and run the Ajax project with Laravel and Angular.

## MySQL Database Server Configuration

1. Open your terminal and execute the following command to access the MySQL server:
```mysql -u root -p```


2. Enter your MySQL server password when prompted. (Press "Enter" as there is no password displayed.)

## Laravel Server Configuration

3. Navigate to the "device" folder where the Laravel server is located using the command:
```cd device```

4. Start the Laravel server with the following command:
```php artisan serve```

6. The Laravel server is now running and ready to handle requests.


## Angular Server Configuration

6. Return to the main project directory using the command:
```cd ..```

7. Access the "projetajax" folder where the Angular application is located with the command:
```cd projetajax```


8. Execute the following command to start the Angular application:
```ng serve```


9. The Angular application is now running and listening for requests at http://localhost:4200/.

## Accessing the Application

10. Open your web browser and go to the following URL:
 ```http://localhost:4200/```

11. You can now use the application to interact with the data from the Laravel server via Ajax calls.

--------

# Using Your Software with a Custom Database

To use your own database with this software, follow these steps:

## Step 1: Database Configuration

1. Open the `.env` file located in the `device/` directory.

2. Modify the `DB_DATABASE` variable with the name of your custom database. For example, if your database is named `my_database`, replace the value with `my_database`.

3. If your database requires a password, make sure to also modify the `DB_PASSWORD` variable accordingly.

## Step 2: Angular Application Configuration

1. Open the `device-list-component.component.ts` file located in the `projetajax/src/app/device-list-component/` directory.

2. Locate the `databaseName` variable (commented in the file) and replace the value with the name of your custom database. For example, if you used `my_database` in the previous step, replace the value with `'my_database'`.

## Step 3: Using Your Custom Database

After completing these steps, you can run your software, and it will interact with your own custom database.

Don't forget to restart your Laravel server and recompile your Angular application after making these changes.

That's it! You have now configured your software to use your custom database.

--- 











