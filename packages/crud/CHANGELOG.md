# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.0.0-alpha.9 (2023-12-07)


### Bug Fixes

* Add missing dependency "pluralize" ([7b6232f](https://github.com/indigolabsslo/crud-automapper/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* cleanup after linting >_< ([e29f935](https://github.com/indigolabsslo/crud-automapper/commit/e29f93505b421d65e613692763fe187f4617514f))
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/indigolabsslo/crud-automapper/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/indigolabsslo/crud-automapper/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/indigolabsslo/crud-automapper/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/indigolabsslo/crud-automapper/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/indigolabsslo/crud-automapper/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/indigolabsslo/crud-automapper/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/indigolabsslo/crud-automapper/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** add unique operationId ([7cffc1e](https://github.com/indigolabsslo/crud-automapper/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/indigolabsslo/crud-automapper/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/indigolabsslo/crud-automapper/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/indigolabsslo/crud-automapper/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/indigolabsslo/crud-automapper/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/indigolabsslo/crud-automapper/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/indigolabsslo/crud-automapper/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/indigolabsslo/crud-automapper/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/indigolabsslo/crud-automapper/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/indigolabsslo/crud-automapper/issues/443)
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/indigolabsslo/crud-automapper/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud:** get primary param filed ([583cfbb](https://github.com/indigolabsslo/crud-automapper/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/indigolabsslo/crud-automapper/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/indigolabsslo/crud-automapper/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/indigolabsslo/crud-automapper/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/indigolabsslo/crud-automapper/issues/283)
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/indigolabsslo/crud-automapper/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/indigolabsslo/crud-automapper/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/indigolabsslo/crud-automapper/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/indigolabsslo/crud-automapper/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/indigolabsslo/crud-automapper/issues/354)
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **jest:** test ts files without build ([53a0db5](https://github.com/indigolabsslo/crud-automapper/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/indigolabsslo/crud-automapper/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **request:** request validation error code 400 ([f8c5921](https://github.com/indigolabsslo/crud-automapper/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/indigolabsslo/crud-automapper/issues/374) [#247](https://github.com/indigolabsslo/crud-automapper/issues/247)
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/indigolabsslo/crud-automapper/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/indigolabsslo/crud-automapper/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/indigolabsslo/crud-automapper/issues/196)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/indigolabsslo/crud-automapper/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/indigolabsslo/crud-automapper/issues/79) [#314](https://github.com/indigolabsslo/crud-automapper/issues/314)
* **swagger:** Swagger id is always required ([75418c3](https://github.com/indigolabsslo/crud-automapper/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/indigolabsslo/crud-automapper/issues/92)
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* typo to get many route options ([bad3768](https://github.com/indigolabsslo/crud-automapper/commit/bad3768dcad0c8f405b425a983e628e430692603))
* webpack properly bundles optional packages ([4c33082](https://github.com/indigolabsslo/crud-automapper/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))


### Features

* added `classTransformOptions` option to auth ([7f3628f](https://github.com/indigolabsslo/crud-automapper/commit/7f3628f74850c4bf4332b9f688a1f8d5adbccf36))
* added `groups` option for `classToPlain` in response interceptor (auth) ([f6a754f](https://github.com/indigolabsslo/crud-automapper/commit/f6a754f3f9f95a7489f86f5525de65d5da30acda))
* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/indigolabsslo/crud-automapper/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/indigolabsslo/crud-automapper/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/indigolabsslo/crud-automapper/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/indigolabsslo/crud-automapper/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/indigolabsslo/crud-automapper/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/indigolabsslo/crud-automapper/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/indigolabsslo/crud-automapper/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/indigolabsslo/crud-automapper/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/indigolabsslo/crud-automapper/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/indigolabsslo/crud-automapper/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/indigolabsslo/crud-automapper/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/indigolabsslo/crud-automapper/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.8 (2023-11-23)


### Bug Fixes

* Add missing dependency "pluralize" ([7b6232f](https://github.com/indigolabsslo/crud-automapper/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* cleanup after linting >_< ([e29f935](https://github.com/indigolabsslo/crud-automapper/commit/e29f93505b421d65e613692763fe187f4617514f))
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/indigolabsslo/crud-automapper/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/indigolabsslo/crud-automapper/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/indigolabsslo/crud-automapper/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/indigolabsslo/crud-automapper/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/indigolabsslo/crud-automapper/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/indigolabsslo/crud-automapper/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/indigolabsslo/crud-automapper/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** add unique operationId ([7cffc1e](https://github.com/indigolabsslo/crud-automapper/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/indigolabsslo/crud-automapper/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/indigolabsslo/crud-automapper/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/indigolabsslo/crud-automapper/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/indigolabsslo/crud-automapper/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/indigolabsslo/crud-automapper/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/indigolabsslo/crud-automapper/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/indigolabsslo/crud-automapper/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/indigolabsslo/crud-automapper/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/indigolabsslo/crud-automapper/issues/443)
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/indigolabsslo/crud-automapper/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud:** get primary param filed ([583cfbb](https://github.com/indigolabsslo/crud-automapper/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/indigolabsslo/crud-automapper/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/indigolabsslo/crud-automapper/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/indigolabsslo/crud-automapper/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/indigolabsslo/crud-automapper/issues/283)
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/indigolabsslo/crud-automapper/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/indigolabsslo/crud-automapper/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/indigolabsslo/crud-automapper/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/indigolabsslo/crud-automapper/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/indigolabsslo/crud-automapper/issues/354)
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **jest:** test ts files without build ([53a0db5](https://github.com/indigolabsslo/crud-automapper/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/indigolabsslo/crud-automapper/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **request:** request validation error code 400 ([f8c5921](https://github.com/indigolabsslo/crud-automapper/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/indigolabsslo/crud-automapper/issues/374) [#247](https://github.com/indigolabsslo/crud-automapper/issues/247)
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/indigolabsslo/crud-automapper/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/indigolabsslo/crud-automapper/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/indigolabsslo/crud-automapper/issues/196)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/indigolabsslo/crud-automapper/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/indigolabsslo/crud-automapper/issues/79) [#314](https://github.com/indigolabsslo/crud-automapper/issues/314)
* **swagger:** Swagger id is always required ([75418c3](https://github.com/indigolabsslo/crud-automapper/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/indigolabsslo/crud-automapper/issues/92)
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* typo to get many route options ([bad3768](https://github.com/indigolabsslo/crud-automapper/commit/bad3768dcad0c8f405b425a983e628e430692603))
* webpack properly bundles optional packages ([4c33082](https://github.com/indigolabsslo/crud-automapper/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))


### Features

* added `classTransformOptions` option to auth ([7f3628f](https://github.com/indigolabsslo/crud-automapper/commit/7f3628f74850c4bf4332b9f688a1f8d5adbccf36))
* added `groups` option for `classToPlain` in response interceptor (auth) ([f6a754f](https://github.com/indigolabsslo/crud-automapper/commit/f6a754f3f9f95a7489f86f5525de65d5da30acda))
* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/indigolabsslo/crud-automapper/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/indigolabsslo/crud-automapper/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/indigolabsslo/crud-automapper/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/indigolabsslo/crud-automapper/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/indigolabsslo/crud-automapper/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/indigolabsslo/crud-automapper/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/indigolabsslo/crud-automapper/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/indigolabsslo/crud-automapper/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/indigolabsslo/crud-automapper/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/indigolabsslo/crud-automapper/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/indigolabsslo/crud-automapper/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/indigolabsslo/crud-automapper/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.7 (2023-11-18)


### Bug Fixes

* Add missing dependency "pluralize" ([7b6232f](https://github.com/indigolabsslo/crud-automapper/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* cleanup after linting >_< ([e29f935](https://github.com/indigolabsslo/crud-automapper/commit/e29f93505b421d65e613692763fe187f4617514f))
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/indigolabsslo/crud-automapper/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/indigolabsslo/crud-automapper/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/indigolabsslo/crud-automapper/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/indigolabsslo/crud-automapper/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/indigolabsslo/crud-automapper/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/indigolabsslo/crud-automapper/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/indigolabsslo/crud-automapper/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** add unique operationId ([7cffc1e](https://github.com/indigolabsslo/crud-automapper/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/indigolabsslo/crud-automapper/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/indigolabsslo/crud-automapper/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/indigolabsslo/crud-automapper/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/indigolabsslo/crud-automapper/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/indigolabsslo/crud-automapper/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/indigolabsslo/crud-automapper/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/indigolabsslo/crud-automapper/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/indigolabsslo/crud-automapper/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/indigolabsslo/crud-automapper/issues/443)
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/indigolabsslo/crud-automapper/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud:** get primary param filed ([583cfbb](https://github.com/indigolabsslo/crud-automapper/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/indigolabsslo/crud-automapper/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/indigolabsslo/crud-automapper/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/indigolabsslo/crud-automapper/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/indigolabsslo/crud-automapper/issues/283)
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/indigolabsslo/crud-automapper/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/indigolabsslo/crud-automapper/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/indigolabsslo/crud-automapper/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/indigolabsslo/crud-automapper/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/indigolabsslo/crud-automapper/issues/354)
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **jest:** test ts files without build ([53a0db5](https://github.com/indigolabsslo/crud-automapper/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/indigolabsslo/crud-automapper/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **request:** request validation error code 400 ([f8c5921](https://github.com/indigolabsslo/crud-automapper/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/indigolabsslo/crud-automapper/issues/374) [#247](https://github.com/indigolabsslo/crud-automapper/issues/247)
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/indigolabsslo/crud-automapper/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/indigolabsslo/crud-automapper/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/indigolabsslo/crud-automapper/issues/196)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/indigolabsslo/crud-automapper/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/indigolabsslo/crud-automapper/issues/79) [#314](https://github.com/indigolabsslo/crud-automapper/issues/314)
* **swagger:** Swagger id is always required ([75418c3](https://github.com/indigolabsslo/crud-automapper/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/indigolabsslo/crud-automapper/issues/92)
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* typo to get many route options ([bad3768](https://github.com/indigolabsslo/crud-automapper/commit/bad3768dcad0c8f405b425a983e628e430692603))
* webpack properly bundles optional packages ([4c33082](https://github.com/indigolabsslo/crud-automapper/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))


### Features

* added `classTransformOptions` option to auth ([7f3628f](https://github.com/indigolabsslo/crud-automapper/commit/7f3628f74850c4bf4332b9f688a1f8d5adbccf36))
* added `groups` option for `classToPlain` in response interceptor (auth) ([f6a754f](https://github.com/indigolabsslo/crud-automapper/commit/f6a754f3f9f95a7489f86f5525de65d5da30acda))
* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/indigolabsslo/crud-automapper/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/indigolabsslo/crud-automapper/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/indigolabsslo/crud-automapper/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/indigolabsslo/crud-automapper/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/indigolabsslo/crud-automapper/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/indigolabsslo/crud-automapper/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/indigolabsslo/crud-automapper/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/indigolabsslo/crud-automapper/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/indigolabsslo/crud-automapper/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/indigolabsslo/crud-automapper/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/indigolabsslo/crud-automapper/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/indigolabsslo/crud-automapper/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.6 (2023-11-18)


### Bug Fixes

* Add missing dependency "pluralize" ([7b6232f](https://github.com/indigolabsslo/crud-automapper/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* cleanup after linting >_< ([e29f935](https://github.com/indigolabsslo/crud-automapper/commit/e29f93505b421d65e613692763fe187f4617514f))
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/indigolabsslo/crud-automapper/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/indigolabsslo/crud-automapper/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/indigolabsslo/crud-automapper/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/indigolabsslo/crud-automapper/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/indigolabsslo/crud-automapper/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/indigolabsslo/crud-automapper/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/indigolabsslo/crud-automapper/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** add unique operationId ([7cffc1e](https://github.com/indigolabsslo/crud-automapper/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/indigolabsslo/crud-automapper/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/indigolabsslo/crud-automapper/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/indigolabsslo/crud-automapper/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/indigolabsslo/crud-automapper/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/indigolabsslo/crud-automapper/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/indigolabsslo/crud-automapper/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/indigolabsslo/crud-automapper/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/indigolabsslo/crud-automapper/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/indigolabsslo/crud-automapper/issues/443)
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/indigolabsslo/crud-automapper/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud:** get primary param filed ([583cfbb](https://github.com/indigolabsslo/crud-automapper/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/indigolabsslo/crud-automapper/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/indigolabsslo/crud-automapper/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/indigolabsslo/crud-automapper/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/indigolabsslo/crud-automapper/issues/283)
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/indigolabsslo/crud-automapper/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/indigolabsslo/crud-automapper/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/indigolabsslo/crud-automapper/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/indigolabsslo/crud-automapper/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/indigolabsslo/crud-automapper/issues/354)
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **jest:** test ts files without build ([53a0db5](https://github.com/indigolabsslo/crud-automapper/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/indigolabsslo/crud-automapper/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **request:** request validation error code 400 ([f8c5921](https://github.com/indigolabsslo/crud-automapper/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/indigolabsslo/crud-automapper/issues/374) [#247](https://github.com/indigolabsslo/crud-automapper/issues/247)
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/indigolabsslo/crud-automapper/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/indigolabsslo/crud-automapper/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/indigolabsslo/crud-automapper/issues/196)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/indigolabsslo/crud-automapper/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/indigolabsslo/crud-automapper/issues/79) [#314](https://github.com/indigolabsslo/crud-automapper/issues/314)
* **swagger:** Swagger id is always required ([75418c3](https://github.com/indigolabsslo/crud-automapper/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/indigolabsslo/crud-automapper/issues/92)
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* typo to get many route options ([bad3768](https://github.com/indigolabsslo/crud-automapper/commit/bad3768dcad0c8f405b425a983e628e430692603))
* webpack properly bundles optional packages ([4c33082](https://github.com/indigolabsslo/crud-automapper/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))


### Features

* added `classTransformOptions` option to auth ([7f3628f](https://github.com/indigolabsslo/crud-automapper/commit/7f3628f74850c4bf4332b9f688a1f8d5adbccf36))
* added `groups` option for `classToPlain` in response interceptor (auth) ([f6a754f](https://github.com/indigolabsslo/crud-automapper/commit/f6a754f3f9f95a7489f86f5525de65d5da30acda))
* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/indigolabsslo/crud-automapper/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/indigolabsslo/crud-automapper/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/indigolabsslo/crud-automapper/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/indigolabsslo/crud-automapper/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/indigolabsslo/crud-automapper/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/indigolabsslo/crud-automapper/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/indigolabsslo/crud-automapper/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/indigolabsslo/crud-automapper/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/indigolabsslo/crud-automapper/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/indigolabsslo/crud-automapper/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/indigolabsslo/crud-automapper/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/indigolabsslo/crud-automapper/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.5 (2023-11-14)


### Bug Fixes

* Add missing dependency "pluralize" ([7b6232f](https://github.com/indigolabsslo/crud-automapper/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* cleanup after linting >_< ([e29f935](https://github.com/indigolabsslo/crud-automapper/commit/e29f93505b421d65e613692763fe187f4617514f))
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/indigolabsslo/crud-automapper/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/indigolabsslo/crud-automapper/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/indigolabsslo/crud-automapper/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/indigolabsslo/crud-automapper/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/indigolabsslo/crud-automapper/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/indigolabsslo/crud-automapper/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/indigolabsslo/crud-automapper/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** add unique operationId ([7cffc1e](https://github.com/indigolabsslo/crud-automapper/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/indigolabsslo/crud-automapper/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/indigolabsslo/crud-automapper/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/indigolabsslo/crud-automapper/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/indigolabsslo/crud-automapper/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/indigolabsslo/crud-automapper/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/indigolabsslo/crud-automapper/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/indigolabsslo/crud-automapper/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/indigolabsslo/crud-automapper/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/indigolabsslo/crud-automapper/issues/443)
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/indigolabsslo/crud-automapper/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud:** get primary param filed ([583cfbb](https://github.com/indigolabsslo/crud-automapper/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/indigolabsslo/crud-automapper/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/indigolabsslo/crud-automapper/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/indigolabsslo/crud-automapper/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/indigolabsslo/crud-automapper/issues/283)
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/indigolabsslo/crud-automapper/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/indigolabsslo/crud-automapper/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/indigolabsslo/crud-automapper/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/indigolabsslo/crud-automapper/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/indigolabsslo/crud-automapper/issues/354)
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **jest:** test ts files without build ([53a0db5](https://github.com/indigolabsslo/crud-automapper/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/indigolabsslo/crud-automapper/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **request:** request validation error code 400 ([f8c5921](https://github.com/indigolabsslo/crud-automapper/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/indigolabsslo/crud-automapper/issues/374) [#247](https://github.com/indigolabsslo/crud-automapper/issues/247)
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/indigolabsslo/crud-automapper/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/indigolabsslo/crud-automapper/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/indigolabsslo/crud-automapper/issues/196)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/indigolabsslo/crud-automapper/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/indigolabsslo/crud-automapper/issues/79) [#314](https://github.com/indigolabsslo/crud-automapper/issues/314)
* **swagger:** Swagger id is always required ([75418c3](https://github.com/indigolabsslo/crud-automapper/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/indigolabsslo/crud-automapper/issues/92)
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* typo to get many route options ([bad3768](https://github.com/indigolabsslo/crud-automapper/commit/bad3768dcad0c8f405b425a983e628e430692603))
* webpack properly bundles optional packages ([4c33082](https://github.com/indigolabsslo/crud-automapper/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))


### Features

* added `classTransformOptions` option to auth ([7f3628f](https://github.com/indigolabsslo/crud-automapper/commit/7f3628f74850c4bf4332b9f688a1f8d5adbccf36))
* added `groups` option for `classToPlain` in response interceptor (auth) ([f6a754f](https://github.com/indigolabsslo/crud-automapper/commit/f6a754f3f9f95a7489f86f5525de65d5da30acda))
* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/indigolabsslo/crud-automapper/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/indigolabsslo/crud-automapper/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/indigolabsslo/crud-automapper/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/indigolabsslo/crud-automapper/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/indigolabsslo/crud-automapper/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/indigolabsslo/crud-automapper/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/indigolabsslo/crud-automapper/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/indigolabsslo/crud-automapper/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/indigolabsslo/crud-automapper/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/indigolabsslo/crud-automapper/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/indigolabsslo/crud-automapper/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/indigolabsslo/crud-automapper/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.4 (2023-11-14)


### Bug Fixes

* Add missing dependency "pluralize" ([7b6232f](https://github.com/indigolabsslo/crud-automapper/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* cleanup after linting >_< ([e29f935](https://github.com/indigolabsslo/crud-automapper/commit/e29f93505b421d65e613692763fe187f4617514f))
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/indigolabsslo/crud-automapper/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/indigolabsslo/crud-automapper/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/indigolabsslo/crud-automapper/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/indigolabsslo/crud-automapper/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/indigolabsslo/crud-automapper/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/indigolabsslo/crud-automapper/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/indigolabsslo/crud-automapper/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** add unique operationId ([7cffc1e](https://github.com/indigolabsslo/crud-automapper/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/indigolabsslo/crud-automapper/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/indigolabsslo/crud-automapper/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/indigolabsslo/crud-automapper/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/indigolabsslo/crud-automapper/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/indigolabsslo/crud-automapper/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/indigolabsslo/crud-automapper/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/indigolabsslo/crud-automapper/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/indigolabsslo/crud-automapper/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/indigolabsslo/crud-automapper/issues/443)
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/indigolabsslo/crud-automapper/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud:** get primary param filed ([583cfbb](https://github.com/indigolabsslo/crud-automapper/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/indigolabsslo/crud-automapper/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/indigolabsslo/crud-automapper/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/indigolabsslo/crud-automapper/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/indigolabsslo/crud-automapper/issues/283)
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/indigolabsslo/crud-automapper/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/indigolabsslo/crud-automapper/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/indigolabsslo/crud-automapper/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/indigolabsslo/crud-automapper/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/indigolabsslo/crud-automapper/issues/354)
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **jest:** test ts files without build ([53a0db5](https://github.com/indigolabsslo/crud-automapper/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/indigolabsslo/crud-automapper/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **request:** request validation error code 400 ([f8c5921](https://github.com/indigolabsslo/crud-automapper/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/indigolabsslo/crud-automapper/issues/374) [#247](https://github.com/indigolabsslo/crud-automapper/issues/247)
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/indigolabsslo/crud-automapper/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/indigolabsslo/crud-automapper/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/indigolabsslo/crud-automapper/issues/196)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/indigolabsslo/crud-automapper/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/indigolabsslo/crud-automapper/issues/79) [#314](https://github.com/indigolabsslo/crud-automapper/issues/314)
* **swagger:** Swagger id is always required ([75418c3](https://github.com/indigolabsslo/crud-automapper/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/indigolabsslo/crud-automapper/issues/92)
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* typo to get many route options ([bad3768](https://github.com/indigolabsslo/crud-automapper/commit/bad3768dcad0c8f405b425a983e628e430692603))
* webpack properly bundles optional packages ([4c33082](https://github.com/indigolabsslo/crud-automapper/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))


### Features

* added `classTransformOptions` option to auth ([7f3628f](https://github.com/indigolabsslo/crud-automapper/commit/7f3628f74850c4bf4332b9f688a1f8d5adbccf36))
* added `groups` option for `classToPlain` in response interceptor (auth) ([f6a754f](https://github.com/indigolabsslo/crud-automapper/commit/f6a754f3f9f95a7489f86f5525de65d5da30acda))
* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/indigolabsslo/crud-automapper/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/indigolabsslo/crud-automapper/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/indigolabsslo/crud-automapper/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/indigolabsslo/crud-automapper/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/indigolabsslo/crud-automapper/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/indigolabsslo/crud-automapper/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/indigolabsslo/crud-automapper/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/indigolabsslo/crud-automapper/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/indigolabsslo/crud-automapper/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/indigolabsslo/crud-automapper/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/indigolabsslo/crud-automapper/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/indigolabsslo/crud-automapper/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`
