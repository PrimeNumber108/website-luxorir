/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [showModalContact, setShowModalContact] = useState(false);
  const [showModalDelivery, setShowModalDelivery] = useState(false);
  const [showModalReturn, setShowModalReturn] = useState(false);
  const [showModalRefund, setShowModalRefund] = useState(false);

  return (
    <>
      <Modal open={showModalContact} setOpen={setShowModalContact} title="Contact us">
        <p className="text-xl leading-8">
          We are here to listen and help. If you have any questions, problems or requests regarding our products or
          brands, please contact us via email:
          <br />
          <Link className="text-blue-500 underline" href="mailto:hello.luxorir@gmail.com" target="_blank">
            hello.luxorir@gmail.com
          </Link>
        </p>
      </Modal>
      <Modal open={showModalDelivery} setOpen={setShowModalDelivery} title="Delivery information">
        <p className="text-xl leading-8">
          After your order has been successfully placed, please allow 1-3 business days for us to process before
          delivery. The delivery may take 3-5 days depending on your areas.
        </p>
      </Modal>
      <Modal
        open={showModalReturn}
        setOpen={setShowModalReturn}
        title="Returns & Exchanges"
        bodyClassName="h-[450px] md:h-auto"
      >
        <h2 className="mb-1.5 text-lg font-bold">RETURN & EXCHANGES</h2>
        <p>
          We offer a 30-day Satisfaction Guarantee! You can return if there is any fault from manufacturer on the item
          you have received, or you will be able to receive other items of your choice. The shipping cost to your house
          will be free of charge.
        </p>
        <br />
        <p>
          All items you wish to return or exchange must be delivered to our warehouse at your expense. In term of
          returning, if you wish to return an item upon receipt, we will refund whatever shipping costs you paid while
          placing your order. If you are exchanging your item(s) we will cover the cost of shipping the exchange item(s)
          to you.
        </p>
        <br />
        <h3 className="mb-1.5 text-lg font-bold">EASY RETURN & EXCHANGE PROCESS</h3>
        <p>
          Firstly, email (So We Can Send You Your Receipt) customer care at{" "}
          <Link className="text-blue-500 underline" href="mailto:hello.luxorir@gmail.com" target="_blank">
            hello.luxorir@gmail.com
          </Link>{" "}
          or call our support team. Our team is available to talk to you 9am-5pm, Monday to Friday! Include in your
          initial request how you wish to proceed (return or exchange) and we will walk you through the process of which
          shipping carrier to ship your items back with, and how long the process should take (the processing times for
          refunds and exchanges may vary).
        </p>
        <br />
        <p>
          Secondly, send your return, and email our customer care team the tracking number associated with your return.
          We highly advise you to send your return package to our warehouse with a tracking number. We are not
          responsible for returns that are not received.
        </p>
        <br />
        <p>
          When we receive your return, it will be processed in 3 – 5 business days. Please be noted that It can take us
          about 3 business days to refund the money into your account. If you’re requesting an exchange, the item(s) you
          requested in your exchange form will be shipped immediately once your return is accepted, granted that they’re
          in stock.
        </p>
      </Modal>
      <Modal open={showModalRefund} setOpen={setShowModalRefund} title="Refund policy">
        <p className="text-xl leading-8">
          Once we receive your item, a refund is initiated immediately. If you canceled a pickup item, and you were
          billed for it, we initiate your refund immediately after you submit your cancellation request. The way your
          refund is processed depends on your original payment method.
        </p>
      </Modal>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 px-10 sm:px-12 lg:py-[60px] py-[30px] bg-[#1C2121] text-white">
          <div className="grid grid-cols-3 gap-5">
            <span className="text-lg text-center cursor-pointer lg:text-left" onClick={() => setShowModalContact(true)}>
              Contact us
            </span>
            <Link className="text-lg text-center lg:text-left" href="/terms-of-use">
              Terms of use
            </Link>
            <Link className="text-lg text-center lg:text-left" href="/privacy-policy">
              Privacy policy
            </Link>
            <span
              className="text-lg text-center cursor-pointer lg:text-left"
              onClick={() => setShowModalDelivery(true)}
            >
              Delivery Information
            </span>
            <span className="text-lg text-center cursor-pointer lg:text-left" onClick={() => setShowModalReturn(true)}>
              Returns & Exchanges
            </span>
            <span className="text-lg text-center cursor-pointer lg:text-left" onClick={() => setShowModalRefund(true)}>
              Refund policy
            </span>
            <div className="flex justify-center col-span-3 gap-4 mt-1 lg:justify-start">
              <Link target="_blank" href="https://www.facebook.com/FEGCosmeticsGCC">
                <img src="/image/icon/facebook.jpeg" alt="" width={30} className="rounded" />
              </Link>
              <Link target="_blank" href="https://www.fegbeauty.com">
                <img src="/image/icon/global.jpeg" alt="" width={30} className="rounded" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-col flex-1 w-full gap-5 px-10 bg-black sm:px-28 lg:w-1/2 lg:py-0 py-14 flex-center">
          <p className="lg:w-[100%] text-heading text-2xl text-white text-center mb-1">
            Founded 2009, our company has a rich history marked by continuous growth, innovation, and a commitment to
            excellence.
          </p>
          <Link href="/about" className="block tracking-[1px] w-fit pb-2">
            <button className="btn btn-white w-fit">ABOUT US</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
