// Import
import { ApiPromise, WsProvider } from "https://jspm.dev/npm:@polkadot/api";

// Construct
const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

// subscribe to all new headers (with extended info)
api.derive.chain.subscribeNewHeads(async (header) => {
    console.log(`#${header.number}: ${header.author}`);
    const signedBlock = await api.rpc.chain.getBlock(header.hash.toHex());

    // the information for each of the contained extrinsics
    signedBlock.block.extrinsics.forEach((ex, index) => {
      // the extrinsics are decoded by the API, human-like view
    
      // const { isSigned } = ex;

      const { method: { method } } = ex;
    
      // // explicit display of name, args & documentation
      // console.log(`${section}.${method}(${args.map((a) => a.toString()).join(', ')})`);
      // console.log(meta?.documentation?.map((d) => d.toString()).join('\n'));

      console.log(method)
      if (method == "remark") {
        console.log("Remark Found")
        console.log(index, ex.toHuman());
      }
      // // signer/nonce info
      // if (isSigned) {
      //   console.log(`signer=${ex.signer.toString()}, nonce=${ex.nonce.toString()}`);
      // }

    });
  });
