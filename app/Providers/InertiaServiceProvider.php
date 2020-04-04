<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;


/**
 * Class InertiaServiceProvider.
 *
 * @package App\Providers
 */
class InertiaServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Set Inertia version
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });


        // Multiple values
        Inertia::share([
            // Synchronously
            'app' => [
                'name' => config('app.name'),
            ],

            // Lazily
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id'     => Auth::user()->id,
                        'name'   => Auth::user()->name,
                    ] : null
                ];
            },

            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            }
        ]);

    }

}
