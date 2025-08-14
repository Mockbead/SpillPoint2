    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'SpillPoint') }}</title>
        <link rel="preload" href="/fonts/VT323.ttf" as="font" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
    </html>
