const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('salesorderfile1', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "MODIFIED BY LstvPoco ON 17.07.20 15:12"
    },
    cancelrem: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    delsta: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    ponum: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    warcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    delrem: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    cusadd1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    cusadd2: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    totscpwdamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    totscpwdamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    docnum: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11",
      unique: "docnum"
    },
    cusdsc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    trmdsc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    smndsc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    shipto: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    trncde: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    trntot: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    smncde: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:11"
    },
    trmcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    cuscde: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    cusgrp: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    curcde: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    comcde: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    usrnam: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    currte: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    prccde: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    sonum: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    shipto2: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatrte: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    othchatot: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    textprc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    logtim: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    trmtypcde: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    trmtypdsc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    othchatotfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    trntotfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    textprcfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    remarks: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    ewtrte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    taxcde: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    refnum: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    docapp: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    docbal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    setdocbal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    totpdc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    settotpdc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    amtapp: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    memtypcde: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    manualgl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    canceldoc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    netvatamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatableamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatexemptamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatzeroratedamtfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    nonvatfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatableamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:12"
    },
    vatexemptamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    vatzeroratedamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    netvatamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    ewtcde: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    ewtamt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    nonvat: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    chknonvat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    manualvat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    busstyle: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    remarks1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    tinnum: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    totamtdis: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    totgroext: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    totamtdisfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    totgroextfor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    orderby: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    projname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    projsite: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    ra: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    sibill: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    billtype: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    siremarks: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    salesengr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    preby: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    chkby: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    apvby: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    delconfnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    ffrom: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field01: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field02: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field03: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field04: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field05: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field06: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field07: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field08: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field09: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
    },
    field10: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:13"
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
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field14: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field15: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field16: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field17: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field18: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field19: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    field20: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    doclock: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N",
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    duedate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    logdte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    lastpaydte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    canceldte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    radte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    aprdte: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "ADDED BY LstvPoco ON 16.09.30 20:14"
    },
    warcde2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    brhcde: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    From: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vattyp: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salesorderfile1',
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
        unique: true,
        using: "BTREE",
        fields: [
          { name: "docnum" },
        ]
      },
      {
        name: "salesorderfile1_vattyp_index",
        using: "BTREE",
        fields: [
          { name: "vattyp" },
        ]
      },
    ]
  });
};
