use lux_key;

create table car_brand
(
    id int auto_increment
        primary key,
    name varchar(64) not null,
    created_date timestamp default CURRENT_TIMESTAMP null,
    last_modified_date timestamp default CURRENT_TIMESTAMP null
);

create table client
(
    id int auto_increment
        primary key,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    telephone varchar(255) not null
);

create table key_brand
(
    id int auto_increment
        primary key,
    name varchar(64) null
);

create table key_category
(
    id int auto_increment
        primary key,
    name varchar(64) not null,
    created_date timestamp default CURRENT_TIMESTAMP null,
    last_modified_date timestamp default CURRENT_TIMESTAMP null
);

create table key_sub_category
(
    id int auto_increment
        primary key,
    name varchar(64) not null,
    id_key_category int null,
    created_date timestamp default CURRENT_TIMESTAMP null,
    last_modified_date timestamp default CURRENT_TIMESTAMP null,
    constraint FK_cb6b6b90318e55be7f4b8ee920b
        foreign key (id_key_category) references key_category (id)
);

create table `key`
(
    id int auto_increment
        primary key,
    code varchar(64) not null,
    amount int null,
    created_date timestamp default CURRENT_TIMESTAMP null,
    last_modified_date timestamp default CURRENT_TIMESTAMP null,
    id_current_price int null,
    id_key_sub_category int null,
    id_key_brand int null,
    constraint IDX_33fd927a0dc1cb26c7df043c9b
        unique (code),
    constraint REL_3384da43566018fdc33117a4f2
        unique (id_current_price),
    constraint code
        unique (code),
    constraint FK_58abbcb1b47b966e2895da71514
        foreign key (id_key_sub_category) references key_sub_category (id),
    constraint key_ibfk_1
        foreign key (id_key_brand) references key_brand (id)
);

create index id_current_price
    on `key` (id_current_price);

create index id_key_brand
    on `key` (id_key_brand);

create table key_car_brands_car_brand
(
    keyId int not null,
    carBrandId int not null,
    primary key (keyId, carBrandId),
    constraint FK_5331fa9905a82220321f855f2b0
        foreign key (carBrandId) references car_brand (id)
            on update cascade on delete cascade,
    constraint FK_dd3f886b5e9be002d50c1540ddb
        foreign key (keyId) references `key` (id)
            on update cascade on delete cascade
);

create index IDX_5331fa9905a82220321f855f2b
    on key_car_brands_car_brand (carBrandId);

create index IDX_dd3f886b5e9be002d50c1540dd
    on key_car_brands_car_brand (keyId);

create table key_categories_car_brand
(
    keyId int not null,
    carBrandId int not null,
    primary key (keyId, carBrandId),
    constraint FK_47ad08ec273157c07afd56f3bd3
        foreign key (keyId) references `key` (id)
            on update cascade on delete cascade,
    constraint FK_eb36e6ce10dd3e88e886079503f
        foreign key (carBrandId) references car_brand (id)
            on update cascade on delete cascade
);

create index IDX_47ad08ec273157c07afd56f3bd
    on key_categories_car_brand (keyId);

create index IDX_eb36e6ce10dd3e88e886079503
    on key_categories_car_brand (carBrandId);

create table key_price
(
    id int auto_increment
        primary key,
    price double null,
    created_date timestamp default CURRENT_TIMESTAMP null,
    last_modified_date timestamp default CURRENT_TIMESTAMP null,
    id_key int null,
    constraint FK_5e881cc2342b687d9784a268a85
        foreign key (id_key) references `key` (id)
            on delete cascade
);

alter table `key`
    add constraint FK_3384da43566018fdc33117a4f25
        foreign key (id_current_price) references key_price (id)
            on delete cascade;

create index id_key
    on key_price (id_key);

create index id_key_category
    on key_sub_category (id_key_category);

create table report
(
    id int auto_increment
        primary key,
    created_date timestamp default CURRENT_TIMESTAMP null,
    path varchar(128) not null
);

create table service
(
    id int auto_increment
        primary key,
    date date not null,
    coding_service_price double null,
    gross double not null,
    created_date timestamp default CURRENT_TIMESTAMP null,
    last_modified_date timestamp default CURRENT_TIMESTAMP null,
    notes longtext not null,
    idClientId int null,
    constraint FK_c0dca7b824a4bd2532128182d1c
        foreign key (idClientId) references client (id)
);

create table service_key
(
    id_service int null,
    id_key int null,
    key_price double not null,
    id int auto_increment
        primary key,
    serviceType enum('IZRADA', 'KODIRANJE', 'POPRAVKA') not null,
    constraint FK_1c2c755478901dbf792f202c192
        foreign key (id_key) references `key` (id),
    constraint FK_5a2f1b8346ea2e22820fa9cef3b
        foreign key (id_service) references service (id)
            on delete cascade
);

create index id_key
    on service_key (id_key);

create index id_service
    on service_key (id_service);

create table user
(
    id int auto_increment
        primary key,
    username varchar(64) not null,
    created_date timestamp default CURRENT_TIMESTAMP null,
    last_modified_date timestamp default CURRENT_TIMESTAMP null,
    password varchar(64) not null,
    constraint IDX_638bac731294171648258260ff
        unique (password),
    constraint IDX_78a916df40e02a9deb1c4b75ed
        unique (username),
    constraint username
        unique (username)
);

