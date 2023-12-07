# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.0.0-alpha.9 (2023-12-07)


### Bug Fixes

* **#138:** Load embedded entities ([6778ef4](https://github.com/indigolabsslo/crud-automapper/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/indigolabsslo/crud-automapper/issues/138)
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-typeorm:** add MariaDB to getFieldWithAlias ([f0b8785](https://github.com/indigolabsslo/crud-automapper/commit/f0b8785583f83876c26ba4cf9d52063c32abf052))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/indigolabsslo/crud-automapper/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/indigolabsslo/crud-automapper/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/indigolabsslo/crud-automapper/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/indigolabsslo/crud-automapper/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/indigolabsslo/crud-automapper/issues/77) [#212](https://github.com/indigolabsslo/crud-automapper/issues/212)
* **typeorm:**  composite key join ([307873b](https://github.com/indigolabsslo/crud-automapper/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/indigolabsslo/crud-automapper/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/indigolabsslo/crud-automapper/issues/59)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/indigolabsslo/crud-automapper/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/indigolabsslo/crud-automapper/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/indigolabsslo/crud-automapper/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/indigolabsslo/crud-automapper/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/indigolabsslo/crud-automapper/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** query wrong generated ([353e902](https://github.com/indigolabsslo/crud-automapper/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/indigolabsslo/crud-automapper/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))


### Features

* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/indigolabsslo/crud-automapper/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/indigolabsslo/crud-automapper/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/indigolabsslo/crud-automapper/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/indigolabsslo/crud-automapper/issues/104)
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/indigolabsslo/crud-automapper/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** create initial support for typeorm ^0.3.0 and nest ^9.0.0 ([3977dc9](https://github.com/indigolabsslo/crud-automapper/commit/3977dc9a99f06662ea1c8c366f95f8ef3949d1dc)), closes [#790](https://github.com/indigolabsslo/crud-automapper/issues/790)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **typeorm:** TypeORM v0.3.0 came with many breaking changes, please see their release notes for
more details. https://github.com/typeorm/typeorm/releases/tag/0.3.0
* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.8 (2023-11-23)


### Bug Fixes

* **#138:** Load embedded entities ([6778ef4](https://github.com/indigolabsslo/crud-automapper/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/indigolabsslo/crud-automapper/issues/138)
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-typeorm:** add MariaDB to getFieldWithAlias ([f0b8785](https://github.com/indigolabsslo/crud-automapper/commit/f0b8785583f83876c26ba4cf9d52063c32abf052))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/indigolabsslo/crud-automapper/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/indigolabsslo/crud-automapper/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/indigolabsslo/crud-automapper/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/indigolabsslo/crud-automapper/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/indigolabsslo/crud-automapper/issues/77) [#212](https://github.com/indigolabsslo/crud-automapper/issues/212)
* **typeorm:**  composite key join ([307873b](https://github.com/indigolabsslo/crud-automapper/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/indigolabsslo/crud-automapper/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/indigolabsslo/crud-automapper/issues/59)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/indigolabsslo/crud-automapper/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/indigolabsslo/crud-automapper/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/indigolabsslo/crud-automapper/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/indigolabsslo/crud-automapper/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/indigolabsslo/crud-automapper/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** query wrong generated ([353e902](https://github.com/indigolabsslo/crud-automapper/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/indigolabsslo/crud-automapper/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))


### Features

* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/indigolabsslo/crud-automapper/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/indigolabsslo/crud-automapper/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/indigolabsslo/crud-automapper/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/indigolabsslo/crud-automapper/issues/104)
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/indigolabsslo/crud-automapper/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** create initial support for typeorm ^0.3.0 and nest ^9.0.0 ([3977dc9](https://github.com/indigolabsslo/crud-automapper/commit/3977dc9a99f06662ea1c8c366f95f8ef3949d1dc)), closes [#790](https://github.com/indigolabsslo/crud-automapper/issues/790)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **typeorm:** TypeORM v0.3.0 came with many breaking changes, please see their release notes for
more details. https://github.com/typeorm/typeorm/releases/tag/0.3.0
* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.7 (2023-11-18)


### Bug Fixes

* **#138:** Load embedded entities ([6778ef4](https://github.com/indigolabsslo/crud-automapper/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/indigolabsslo/crud-automapper/issues/138)
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-typeorm:** add MariaDB to getFieldWithAlias ([f0b8785](https://github.com/indigolabsslo/crud-automapper/commit/f0b8785583f83876c26ba4cf9d52063c32abf052))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/indigolabsslo/crud-automapper/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/indigolabsslo/crud-automapper/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/indigolabsslo/crud-automapper/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/indigolabsslo/crud-automapper/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/indigolabsslo/crud-automapper/issues/77) [#212](https://github.com/indigolabsslo/crud-automapper/issues/212)
* **typeorm:**  composite key join ([307873b](https://github.com/indigolabsslo/crud-automapper/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/indigolabsslo/crud-automapper/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/indigolabsslo/crud-automapper/issues/59)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/indigolabsslo/crud-automapper/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/indigolabsslo/crud-automapper/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/indigolabsslo/crud-automapper/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/indigolabsslo/crud-automapper/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/indigolabsslo/crud-automapper/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** query wrong generated ([353e902](https://github.com/indigolabsslo/crud-automapper/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/indigolabsslo/crud-automapper/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))


### Features

* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/indigolabsslo/crud-automapper/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/indigolabsslo/crud-automapper/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/indigolabsslo/crud-automapper/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/indigolabsslo/crud-automapper/issues/104)
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/indigolabsslo/crud-automapper/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** create initial support for typeorm ^0.3.0 and nest ^9.0.0 ([3977dc9](https://github.com/indigolabsslo/crud-automapper/commit/3977dc9a99f06662ea1c8c366f95f8ef3949d1dc)), closes [#790](https://github.com/indigolabsslo/crud-automapper/issues/790)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **typeorm:** TypeORM v0.3.0 came with many breaking changes, please see their release notes for
more details. https://github.com/typeorm/typeorm/releases/tag/0.3.0
* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.6 (2023-11-18)


### Bug Fixes

* **#138:** Load embedded entities ([6778ef4](https://github.com/indigolabsslo/crud-automapper/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/indigolabsslo/crud-automapper/issues/138)
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-typeorm:** add MariaDB to getFieldWithAlias ([f0b8785](https://github.com/indigolabsslo/crud-automapper/commit/f0b8785583f83876c26ba4cf9d52063c32abf052))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/indigolabsslo/crud-automapper/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/indigolabsslo/crud-automapper/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/indigolabsslo/crud-automapper/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/indigolabsslo/crud-automapper/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/indigolabsslo/crud-automapper/issues/77) [#212](https://github.com/indigolabsslo/crud-automapper/issues/212)
* **typeorm:**  composite key join ([307873b](https://github.com/indigolabsslo/crud-automapper/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/indigolabsslo/crud-automapper/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/indigolabsslo/crud-automapper/issues/59)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/indigolabsslo/crud-automapper/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/indigolabsslo/crud-automapper/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/indigolabsslo/crud-automapper/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/indigolabsslo/crud-automapper/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/indigolabsslo/crud-automapper/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** query wrong generated ([353e902](https://github.com/indigolabsslo/crud-automapper/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/indigolabsslo/crud-automapper/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))


### Features

* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/indigolabsslo/crud-automapper/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/indigolabsslo/crud-automapper/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/indigolabsslo/crud-automapper/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/indigolabsslo/crud-automapper/issues/104)
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/indigolabsslo/crud-automapper/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** create initial support for typeorm ^0.3.0 and nest ^9.0.0 ([3977dc9](https://github.com/indigolabsslo/crud-automapper/commit/3977dc9a99f06662ea1c8c366f95f8ef3949d1dc)), closes [#790](https://github.com/indigolabsslo/crud-automapper/issues/790)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **typeorm:** TypeORM v0.3.0 came with many breaking changes, please see their release notes for
more details. https://github.com/typeorm/typeorm/releases/tag/0.3.0
* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.5 (2023-11-14)


### Bug Fixes

* **#138:** Load embedded entities ([6778ef4](https://github.com/indigolabsslo/crud-automapper/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/indigolabsslo/crud-automapper/issues/138)
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-typeorm:** add MariaDB to getFieldWithAlias ([f0b8785](https://github.com/indigolabsslo/crud-automapper/commit/f0b8785583f83876c26ba4cf9d52063c32abf052))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/indigolabsslo/crud-automapper/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/indigolabsslo/crud-automapper/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/indigolabsslo/crud-automapper/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/indigolabsslo/crud-automapper/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/indigolabsslo/crud-automapper/issues/77) [#212](https://github.com/indigolabsslo/crud-automapper/issues/212)
* **typeorm:**  composite key join ([307873b](https://github.com/indigolabsslo/crud-automapper/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/indigolabsslo/crud-automapper/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/indigolabsslo/crud-automapper/issues/59)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/indigolabsslo/crud-automapper/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/indigolabsslo/crud-automapper/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/indigolabsslo/crud-automapper/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/indigolabsslo/crud-automapper/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/indigolabsslo/crud-automapper/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** query wrong generated ([353e902](https://github.com/indigolabsslo/crud-automapper/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/indigolabsslo/crud-automapper/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))


### Features

* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/indigolabsslo/crud-automapper/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/indigolabsslo/crud-automapper/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/indigolabsslo/crud-automapper/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/indigolabsslo/crud-automapper/issues/104)
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/indigolabsslo/crud-automapper/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** create initial support for typeorm ^0.3.0 and nest ^9.0.0 ([3977dc9](https://github.com/indigolabsslo/crud-automapper/commit/3977dc9a99f06662ea1c8c366f95f8ef3949d1dc)), closes [#790](https://github.com/indigolabsslo/crud-automapper/issues/790)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **typeorm:** TypeORM v0.3.0 came with many breaking changes, please see their release notes for
more details. https://github.com/typeorm/typeorm/releases/tag/0.3.0
* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





# 5.0.0-alpha.4 (2023-11-14)


### Bug Fixes

* **#138:** Load embedded entities ([6778ef4](https://github.com/indigolabsslo/crud-automapper/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/indigolabsslo/crud-automapper/issues/138)
* **compile:** set up references to ts projects ([730ad02](https://github.com/indigolabsslo/crud-automapper/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud-typeorm:** add MariaDB to getFieldWithAlias ([f0b8785](https://github.com/indigolabsslo/crud-automapper/commit/f0b8785583f83876c26ba4cf9d52063c32abf052))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/indigolabsslo/crud-automapper/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/indigolabsslo/crud-automapper/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/indigolabsslo/crud-automapper/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* fix pagination mapper ([ace06f2](https://github.com/indigolabsslo/crud-automapper/commit/ace06f2537f659aa95972a1f72afa6cd08515277))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/indigolabsslo/crud-automapper/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/indigolabsslo/crud-automapper/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/indigolabsslo/crud-automapper/issues/77) [#212](https://github.com/indigolabsslo/crud-automapper/issues/212)
* **typeorm:**  composite key join ([307873b](https://github.com/indigolabsslo/crud-automapper/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/indigolabsslo/crud-automapper/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/indigolabsslo/crud-automapper/issues/55)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/indigolabsslo/crud-automapper/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/indigolabsslo/crud-automapper/issues/59)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/indigolabsslo/crud-automapper/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/indigolabsslo/crud-automapper/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/indigolabsslo/crud-automapper/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/indigolabsslo/crud-automapper/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/indigolabsslo/crud-automapper/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** fixed left join by default ([3307348](https://github.com/indigolabsslo/crud-automapper/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/indigolabsslo/crud-automapper/issues/31) [#98](https://github.com/indigolabsslo/crud-automapper/issues/98)
* **typeorm:** query wrong generated ([353e902](https://github.com/indigolabsslo/crud-automapper/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/indigolabsslo/crud-automapper/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/indigolabsslo/crud-automapper/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))


### Features

* **automapper:** add Automapper support ([8345db6](https://github.com/indigolabsslo/crud-automapper/commit/8345db6ee4cbce54438a9219e1057e8d27c33021))
* composite primary key ([796b0ce](https://github.com/indigolabsslo/crud-automapper/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/indigolabsslo/crud-automapper/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/indigolabsslo/crud-automapper/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/indigolabsslo/crud-automapper/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/indigolabsslo/crud-automapper/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/indigolabsslo/crud-automapper/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/indigolabsslo/crud-automapper/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/indigolabsslo/crud-automapper/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/indigolabsslo/crud-automapper/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/indigolabsslo/crud-automapper/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/indigolabsslo/crud-automapper/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/indigolabsslo/crud-automapper/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/indigolabsslo/crud-automapper/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/indigolabsslo/crud-automapper/issues/229)
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/indigolabsslo/crud-automapper/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/indigolabsslo/crud-automapper/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/indigolabsslo/crud-automapper/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/indigolabsslo/crud-automapper/issues/104)
* **request:** new search condition api ([06c3fe5](https://github.com/indigolabsslo/crud-automapper/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm-crud:** added class transform options for `plainToClass` ([a516a62](https://github.com/indigolabsslo/crud-automapper/commit/a516a628db1064837485d5a55e5d6e03cabc522f))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/indigolabsslo/crud-automapper/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/indigolabsslo/crud-automapper/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/indigolabsslo/crud-automapper/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** create initial support for typeorm ^0.3.0 and nest ^9.0.0 ([3977dc9](https://github.com/indigolabsslo/crud-automapper/commit/3977dc9a99f06662ea1c8c366f95f8ef3949d1dc)), closes [#790](https://github.com/indigolabsslo/crud-automapper/issues/790)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/indigolabsslo/crud-automapper/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **typeorm:** TypeORM v0.3.0 came with many breaking changes, please see their release notes for
more details. https://github.com/typeorm/typeorm/releases/tag/0.3.0
* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`
