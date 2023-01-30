<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UpdateLangController extends Controller
{
    public function update(Request $request)
    {
        session()->put('lang', $request->lang);

        return redirect()->back();
    }
}
