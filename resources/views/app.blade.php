<!DOCTYPE html>
<html>
  <head>
    <title>{{ config('app.name', 'Laravel Boilerplate') }}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

    @routes

    <script src="{{ mix('/js/app.js') }}" defer></script>
  </head>

  <body class="uk-background-muted">
    @inertia
  </body>
</html>
