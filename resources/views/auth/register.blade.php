<!-- resources/views/auth/register.blade.php -->
@extends('layouts.app')

@section('content')
    <div id="register-form-root" data-csrf="{{ csrf_token() }}"></div>
@endsection
