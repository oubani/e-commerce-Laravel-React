<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        // print_r($data);
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    function register(Request $request)
    {
        try {
            // return $request;
            $request->validate([
                'name' => 'required|string|min:8|max:255',
                'email' => 'required|unique:users,email',
                'password' => 'required|string|min:8'
            ]);
            // return $request;
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            // print_r($data);
            if (!$user) {
                return response([
                    'message' => ['Email already taken please enter another email ']
                ], 404);
            }

            $token = $user->createToken('my-app-token')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response($response, 201);
        } catch (\Throwable $th) {
            return 'Email already taken try with another one';
        };
    }
    function users()
    {
        return User::all();
    }
}
