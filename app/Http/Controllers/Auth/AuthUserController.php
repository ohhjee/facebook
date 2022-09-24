<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class AuthUserController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'firstname' => 'required|string',
            'surname' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'gender' => 'required| in:Male,Female,Other',
            'password' => ['required', 'confirmed', Password::min(4)->mixedCase()->numbers()->symbols()],
        ]);
        $user = User::create([
            'firstname' => $data['firstname'],
            'surname' => $data['surname'],
            'gender' => $data['gender'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
        // return new AuthUserResource($user   s);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => [
                'required'
            ],
        ]);
        if (!Auth::attempt($credentials)) {
            return response([
                'error' => 'This Provided credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout()
    {
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response([
            'success' => true
        ]);
    }




    // public function mobile(Request $request)
    // {
    //     $data = $request->validate([
    //         'firstname' => 'required|string',
    //         'surname' => 'required|string',
    //         'email' => 'required|email|string|unique:users,email',
    //         'gender' => 'required| in:Male,Female,Other',
    //         'password' => ['required', 'confirmed', Password::min(4)->mixedCase()->numbers()->symbols()],
    //     ]);
    //     $user = User::create([
    //         'firstname' => $data['firstname'],
    //         'surname' => $data['surname'],
    //         'gender' => $data['gender'],
    //         'email' => $data['email'],
    //         'password' => bcrypt($data['password'])
    //     ]);
    //     $token = $user->createToken('main')->plainTextToken;
    //     return response([
    //         'user' => $data,
    //         'token' => $token
    //     ]);
    //     // return new AuthUserResource($user   s);
    // }
    // public function mobilv1(Request $request)
    // {
    //     $data = $request->validate([
    //         'firstname' => 'required|string',
    //         'surname' => 'required|string',
    //     ]);
    //     return response([
    //         'user' => $data,
    //         // 'token' => $token
    //     ]);
    //     // return new AuthUserResource($user   s);
    // }
    // public function mobilv2(Request $request)
    // {
    //     $data = $request->validate([
    //         'email' => 'required|email|string|unique:users,email',
    //     ]);

    //     return response([
    //         'user' => $data,
    //         // 'token' => $token
    //     ]);
    //     // return new AuthUserResource($user   s);
    // }
    // public function mobilv3(Request $request)
    // {
    //     $data = $request->validate([
    //         'gender' => 'required| in:Male,Female,Other',
    //     ]);

    //     return response([
    //         'user' => $data,
    //         // 'token' => $token
    //     ]);
    //     // return new AuthUserResource($user   s);
    // }
    // public function mobilv4(Request $request)
    // {
    //     $data = $request->validate([
    //         // 'firstname' => 'required|string',
    //         // 'surname' => 'required|string',
    //         // 'email' => 'required|email|string|unique:users,email',
    //         // 'gender' => 'required| in:Male,Female,Other',
    //         'password' => ['required', 'confirmed', Password::min(4)->mixedCase()->numbers()->symbols()],
    //     ]);
    //     $user = User::create([
    //         // 'firstname' => $data['firstname'],
    //         // 'surname' => $data['surname'],
    //         // 'gender' => $data['gender'],
    //         // 'email' => $data['email'],
    //         'password' => bcrypt($data['password'])
    //     ]);
    //     $token = $user->createToken('main')->plainTextToken;
    //     return response([
    //         'user' => $data,
    //         'token' => $token
    //     ]);
    //     // return new AuthUserResource($user   s);
    // }
}
