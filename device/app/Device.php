<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    // Nom de la table
    protected $table = 'devices';

    // Colonnes
    protected $fillable = ['id', 'name', 'created_at', 'updated_at', 'gateway'];

    // Désactiver les horodatages
    public $timestamps = false;

    // Type de données.
    protected $casts = [
        'id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'gateway' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
