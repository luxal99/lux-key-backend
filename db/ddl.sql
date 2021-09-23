use lux_key;

create table user
(
    id                 int auto_increment primary key,
    username           varchar(64) not null unique,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP()
);

create table key_category
(
    id                 int auto_increment primary key,
    name               varchar(64) not null,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP()
);

create table key_sub_category
(


    id                 int auto_increment primary key,
    name               varchar(64) not null,
    id_category        int         not null,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP(),
    foreign key (id_category) references key_category (id)
);

create table `key`
(
    id                 int auto_increment primary key,
    name               varchar(64) not null,
    amount             int,
    code               varchar(64) not null unique,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP()
);
create table `key_price`
(
    id                 int auto_increment primary key,
    price              double,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP()
);

create table car_brand
(
    id                 int auto_increment primary key,
    name               varchar(64) not null,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP()
);

create table car_model
(
    id                 int auto_increment primary key,
    name               varchar(64) not null,
    id_car_brand       int         not null,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP(),

    foreign key (id_car_brand) references car_brand (id)
);

create table service_type
(
    id                 int auto_increment primary key,
    name               varchar(64) not null,
    created_date       timestamp default CURRENT_TIMESTAMP(),
    last_modified_date timestamp default CURRENT_TIMESTAMP()
);

create table service
(
    id                   int auto_increment primary key,
    date                 date   not null,
    coding_service_price double,
    gross                double not null,
    created_date         timestamp default CURRENT_TIMESTAMP(),
    last_modified_date   timestamp default CURRENT_TIMESTAMP()
);
create table service_key
(
    id_service int    not null,
    id_key     int    not null,
    key_price  double not null,

    foreign key (id_service) references service (id),
    foreign key (id_key) references `key` (id)
);
alter table `key`
    add column id_current_price int;
alter table `key`
    add foreign key (id_current_price) references key_price (id);

alter table key_price
    add column id_key int;
alter table key_price
    add foreign key (id_key) references `key` (id)
