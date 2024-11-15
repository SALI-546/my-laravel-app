<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CRMController extends Controller
{
    public function clients()
    {
        return view('crm.clients');
    }

    public function opportunites()
    {
        return view('crm.opportunites');
    }

    public function interactions()
    {
        return view('crm.interactions');
    }
}
