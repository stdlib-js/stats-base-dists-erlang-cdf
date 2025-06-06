<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Erlang][erlang-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_cdf" align="center" raw="F(x; k,\lambda) = 1 - \sum_{n=0}^{k-1}\frac{1}{n!}e^{-\lambda x}(\lambda x)^n" alt="Cumulative distribution function for a Erlang distribution."> -->

```math
F(x; k,\lambda) = 1 - \sum_{n=0}^{k-1}\frac{1}{n!}e^{-\lambda x}(\lambda x)^n
```

<!-- <div class="equation" align="center" data-raw-text="F(x; k,\lambda) = 1 - \sum_{n=0}^{k-1}\frac{1}{n!}e^{-\lambda x}(\lambda x)^n" data-equation="eq:erlang_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/erlang/cdf/docs/img/equation_erlang_cdf.svg" alt="Cumulative distribution function for a Erlang distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the shape parameter and `lambda` is the rate parameter. The [Erlang][erlang-distribution] distribution is a special case of the gamma distribution, as `k` is constrained to the natural numbers.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-erlang-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-erlang-cdf' );
```

#### cdf( x, k, lambda )

Evaluates the [cumulative distribution function][cdf] (CDF) for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = cdf( 2.0, 1, 1.0 );
// returns ~0.865

y = cdf( 2.0, 3, 1.0 );
// returns ~0.323

y = cdf( -1.0, 2, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4, 2.0 );
// returns 0.0

y = cdf( +Infinity, 4, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1, NaN );
// returns NaN
```

If not provided a nonnegative integer for `k`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -2, 0.5 );
// returns NaN

y = cdf( 2.0, 0.5, 0.5 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( 2.0, 0.0, 2.0 );
// returns 1.0

y = cdf( -2.0, 0.0, 2.0 );
// returns 0.0

y = cdf( 0.0, 0.0, 2.0 );
// returns 1.0
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 1, 0.0 );
// returns NaN

y = cdf( 2.0, 1, -5.0 );
// returns NaN
```

#### cdf.factory( k, lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var mycdf = cdf.factory( 2, 0.5 );

var y = mycdf( 6.0 );
// returns ~0.801

y = mycdf( 2.0 );
// returns ~0.264
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var cdf = require( '@stdlib/stats-base-dists-erlang-cdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 20, 0.0, 10.0, opts );
var k = discreteUniform( 20, 0, 10, opts );
var lambda = uniform( 20, 0.0, 5.0, opts );

logEachMap( 'x: %0.4f, k: %d, λ: %0.4f, F(x;k,λ): %0.4f', x, k, lambda, cdf );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-erlang-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-erlang-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-erlang-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-erlang-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-erlang-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-erlang-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-erlang-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-erlang-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

</section>

<!-- /.links -->
