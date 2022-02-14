import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import { mineBlocks, expandTo9Decimals ,expandTo18Decimals} from "./utility/utilities";
import {
  IDistributor,
  OlympusERC20Token,
  OlympusERC20Token__factory,
  SOlympus,
  SOlympus__factory,
  GOHM,
  GOHM__factory,
  OlympusStaking,
  OlympusStaking__factory,
  OlympusAuthority,
  OlympusAuthority__factory,
  OlympusTreasury,
  OlympusTreasury__factory,
} from "../typechain";
import { connect } from "http2";
import { strictEqual } from "assert";

describe("stake",async ()=>{
  let Ohm :OlympusERC20Token;
  let sOhm :SOlympus;
  let gOhm : GOHM;
  let staking : OlympusStaking;
  let Authority :OlympusAuthority;
  let Treasury :OlympusTreasury;
  let owner: SignerWithAddress;
  let s1: SignerWithAddress;
  let signers: SignerWithAddress[];

  //time in epoch
  const date = new Date();
  const time = date.getTime();
  const endTime = time + 100;

  beforeEach( async()=>{
    signers= await ethers.getSigners();
    owner =signers[1];
    s1 = signers[2];

    sOhm = await new SOlympus__factory(owner).deploy(); 
    Authority = await new OlympusAuthority__factory(owner).deploy(owner.address,owner.address,owner.address,owner.address);
    Ohm = await new OlympusERC20Token__factory(owner).deploy(Authority.address);
    gOhm = await new GOHM__factory(owner).deploy(owner.address,sOhm.address);
    staking = await new OlympusStaking__factory(owner).deploy(Ohm.address,sOhm.address,gOhm.address,100,time ,endTime,Authority.address);
    Treasury = await new OlympusTreasury__factory(owner).deploy(Ohm.address,2,Authority.address);
    
  })
  //staking .................
  it("staking",async()=>{
    await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
    console.log(await Ohm.balanceOf(s1.address));
    //initlize
    await sOhm.initialize(staking.address,Treasury.address);

    await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
    await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),true,true);
    const sohmbal=await sOhm.balanceOf(s1.address);
    expect(Number(sohmbal)).to.be.equal(Number(expandTo9Decimals(11)));
  });

  //unstack................
  it("Unstaking",async()=>{
    await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
    console.log(await Ohm.balanceOf(s1.address));
    //initlize
    await sOhm.initialize(staking.address,Treasury.address);
    await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
    await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),true,true);
    await sOhm.connect(s1).approve(staking.address,expandTo9Decimals(11));

    await staking.connect(s1).unstake(s1.address,expandTo9Decimals(11),true,true);
    const sohmbal=await sOhm.balanceOf(s1.address);

    expect(Number(sohmbal)).to.be.equal(Number(expandTo9Decimals(0)));

  });

   //warmup info...supplyInWarmup.............
  it("warmUpinfo",async()=>{
    await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
    // console.log(await Ohm.balanceOf(s1.address));
    await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
    await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),true,false);
    const warmUpbal1=await staking.supplyInWarmup();
  
     expect(Number(warmUpbal1)).to.be.equal(Number(expandTo9Decimals(11)));
  });

    //warmup info to claim....supplyInWarmup............
    it("warmUpinfo To Claim",async()=>{
      await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
      // console.log(await Ohm.balanceOf(s1.address));
      await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
      await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),true,false);
    //initlize
      await sOhm.initialize(staking.address,Treasury.address);      
      await staking.connect(s1).claim(s1.address,true);
      const warmUpbal1=await staking.supplyInWarmup();
      console.log(warmUpbal1);
      expect(Number(warmUpbal1)).to.be.equal(Number(expandTo9Decimals(0)));
    });

    //ohm to Gohm................
    it("ohm to Gohm",async()=>{
      // console.log(owner.address);
      await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
      // console.log(await Ohm.balanceOf(s1.address));
      // console.log(await sOhm.initializer());

      await sOhm.connect(owner).setIndex(11);
      // console.log(await gOhm.index(),"index");
      await gOhm.connect(owner).migrate(staking.address,sOhm.address);
      //stack//
      await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
      await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),false,true);
      const balanceGohm=await gOhm.balanceOf(s1.address);     
      const balanceTo = await gOhm.balanceTo(expandTo9Decimals(11));
       
       expect(Number(balanceGohm)).to.be.equal(Number(balanceTo));
    });

    //warp for sOHM to gOHM............
    it("wrap",async()=>{
      //mint ohm for s1//
      await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
      // console.log(await Ohm.balanceOf(s1.address));
      //gohm index and initilize//
      await sOhm.connect(owner).setIndex(11);
      // console.log(await gOhm.index(),"index");
      await sOhm.initialize(staking.address,Treasury.address);
      // console.log(await sOhm.initializer(),"ininitlizer");
      //stack of sohm//
      await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
      await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),true,true);
      const sohmbal=await sOhm.balanceOf(s1.address);
      // console.log(sohmbal,"sohmbal");
      //approve//
      await gOhm.connect(owner).migrate(staking.address,sOhm.address);
      //wrap//
      await sOhm.connect(s1).approve(staking.address,expandTo9Decimals(11));
      await staking.connect(s1).wrap(s1.address,expandTo9Decimals(11));
      //check balance //
      const balanceGohm=await gOhm.balanceOf(s1.address);     
      const balanceTo = await gOhm.balanceTo(expandTo9Decimals(11));
      //expect//
      expect(Number(balanceGohm)).to.be.equal(Number(balanceTo));
    });


    //Unwarp for sOHM to gOHM............
    it("Unwrap",async()=>{
      //mint ohm for s1//
      await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
      // console.log(await Ohm.balanceOf(s1.address));
      //gohm index and initilize//
      await sOhm.connect(owner).setIndex(11);
      // console.log(await gOhm.index(),"index");
      await sOhm.initialize(staking.address,Treasury.address);
      // console.log(await sOhm.initializer(),"ininitlizer");
      //stack of sohm//
      await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
      await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),true,true);
      const beforeUnwarpSohm=await sOhm.balanceOf(s1.address);     
      // console.log(beforeUnwarpSohm);
      //approve//
      await gOhm.connect(owner).migrate(staking.address,sOhm.address);
      //wrap//
      await sOhm.connect(s1).approve(staking.address,expandTo9Decimals(11));
      await staking.connect(s1).wrap(s1.address,expandTo9Decimals(11));

      //check balance//     
      const balanceTo = await gOhm.balanceTo(expandTo9Decimals(11));
      //Unwarp//
      await gOhm.connect(s1).approve(staking.address,balanceTo);
      await staking.connect(s1).unwrap(s1.address, balanceTo);
      //balance check//
      const afterUnwarpSohm=await sOhm.balanceOf(s1.address);     
      // console.log(afterUnwarpSohm);
      //expect//
      expect(Number(afterUnwarpSohm)).to.be.equal(Number(beforeUnwarpSohm));
    });


  //gOhm to ohm
    it.only("Gohm to ohm",async()=>{
     //mint//
      await Ohm.connect(owner).mint(s1.address,expandTo9Decimals(111));
      //set index//
      await sOhm.connect(owner).setIndex(11);
      // console.log(await gOhm.index(),"index");
      //migrate//
      await gOhm.connect(owner).migrate(staking.address,sOhm.address);
      //staking//
      await Ohm.connect(s1).approve(staking.address,expandTo9Decimals(11));
      await staking.connect(s1).stake(s1.address,expandTo9Decimals(11),false,true);
      const balanceGohm=await gOhm.balanceOf(s1.address);     
      // const balanceTo = await gOhm.balanceTo(expandTo9Decimals(11));
      // console.log(balanceGohm,"balanceGohm");
      //Approve//
      await gOhm.connect(s1).approve(s1.address,balanceGohm);
       const OHMReturn = await gOhm.balanceFrom(balanceGohm);  //to calulate ohm from Gohm
      //Unstake//........   
      await staking.connect(s1).unstake(s1.address,balanceGohm,false,false);
      const balanceAfterUnstackGohm=await gOhm.balanceOf(s1.address);     
      // console.log(balanceAfterUnstackGohm,"balanceGohm1");
      //het OHM balance//
      const balanceOhm=await Ohm.balanceOf(s1.address);     
      console.log(balanceOhm);
      expect(Number(OHMReturn)).to.be.equal(Number(expandTo9Decimals(11)));
      expect(Number(balanceAfterUnstackGohm)).to.be.equal(Number(0));
      })

})


