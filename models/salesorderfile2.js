const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('salesorderfile2', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "MODIFIED BY LstvPoco ON 18.05.31 10:49"
    },
    field01: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field02: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field03: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field04: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field05: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field06: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field07: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field08: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field09: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field10: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field11: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field12: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field13: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    field14: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    field15: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    field16: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    field17: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    field18: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    field19: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    field20: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    delsta: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    ponum: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    scpwddis: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    scpwdamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    scpwdamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    docnum: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    cusdsc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    itmcde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    itmdsc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    itmqty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    untprc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    extprc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    trncde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    untmea: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    prcdst1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    prcdst2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    prcdst3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    wardsc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    factor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    cuscde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    warcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    groprc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    prccde: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    sonum: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    disamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:15"
    },
    conver1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    smncde: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    smndsc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    usrnam: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    logtim: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    trmtypcde: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    trmtypdsc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    curcde: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    currte: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    disamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    untprcfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    groprcfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    extprcfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    untcst: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    extcst: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    sernum: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    drnum: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    disper: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    lstcst: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    extlst: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    avecst: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    extave: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    fifcst: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    extfif: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    itmtyp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    itmdel: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    copyqty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    cstdsta: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    cstoth: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    netvatamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    vatamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    netvatamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    taxcde: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    vatamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:16"
    },
    vatrte: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    ewtcde: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    ewtrte: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    evatcde: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    evatrte: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    amtdis: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    groext: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    amtdisfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    groextfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    itmrem1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    itmrem2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    itmrem3: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    dettyp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "i",
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    logdte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:17"
    },
    warcde2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    copy_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcodenum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    brhcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    barcde: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    discamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    discamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    disccde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    discper: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    repgrp: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ""
    },
    vattyp: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salesorderfile2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recid" },
        ]
      },
      {
        name: "docnum",
        using: "BTREE",
        fields: [
          { name: "docnum" },
        ]
      },
      {
        name: "salesorderfile2_cuscde_index",
        using: "BTREE",
        fields: [
          { name: "cuscde" },
        ]
      },
      {
        name: "salesorderfile2_itmcde_index",
        using: "BTREE",
        fields: [
          { name: "itmcde" },
        ]
      },
      {
        name: "salesorderfile2_vattyp_index",
        using: "BTREE",
        fields: [
          { name: "vattyp" },
        ]
      },
    ]
  });
};
