<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Device;
use Illuminate\Support\Facades\DB;

class DeviceController extends Controller
{
    public function index(Request $request)
    {
    // Récupérer le nom de la base de données à partir de la requête
   /* $databaseName = $request->input('database');

    // Définir la connexion à la base de données en fonction du nom
    config(['database.connections.mysql.database' => $databaseName]);

    DB::reconnect('mysql');*/

    $devices = Device::all();

    //config(['database.connections.mysql.database' => env('DB_DATABASE')]);
    //DB::reconnect('mysql');

    return response()->json($devices);
    }

    public function show($databaseName)
    {
    config(['database.connections.mysql.database' => $databaseName]);

    $devices = Device::all();

    return response()->json($devices);
    }
}
