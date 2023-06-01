"use client";

import FacebookButton from "./ConnectWithUsButtons/FacebookButton";
import InstagramButton from "./ConnectWithUsButtons/InstagramButton";
import PhoneCallButton from "./ConnectWithUsButtons/PhoneCallButton";
import TextUsWhatsappButton from "./ConnectWithUsButtons/TextUsWhatsappButton";

export default function EntityPageContainerWithEntityInfos({ entityInfos }) {
  return (
    <div className=" bg-white rounded-lg mb-5 sm:mb-0 sm:pb-6 py-4 drop-shadow-xl px-3 sm:px-6 flex-none sm:w-[307px]">
      <div className="font-semibold flex justify-between flex-col space-y-3 sm:space-y-4">
        {/* ENTITY TAGS DIV */}
        <div>
          <div>Entity Tags</div>
          <div className="grid grid-rows-2 grid-flow-col gap-2 sm:gap-2 sm:pb-3 pb-3 pt-2 sm:pt-2 overflow-auto">
            {entityInfos.entity_tags?.map((tag) => (
              <div className="w-fit  mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* OPENING HOURS DIV */}
        <div>
          <div className="sm:pb-0.5 -mt-3 sm:-mt-5">Opening Hours</div>
          <div className="sm:px-1 divide-y">
            <div className="flex justify-between">
              <div className="font-normal text-xs">Monday-Friday</div>
              <div className="font-normal text-xs">8:00A.M-10:00P.M</div>
            </div>
            <div className="flex justify-between">
              <div className="font-normal text-xs">Saturday-Sunday</div>
              <div className="font-normal text-xs">8:00A.M-5:00P.M</div>
            </div>
          </div>
        </div>
        {/* ADDRESS DIV */}
        <div>
          <div>Address</div>
          <div className="sm:px-1">
            <div className="font-normal text-xs">
              {entityInfos.entity_address}
            </div>
            {/* GOOGLE MAPS */}
            <div className="bg-gray-200 h-36 rounded-lg"></div>
          </div>
        </div>

        {/* CONNECT WITH US DIV */}
        <div>
          <div className="pb-0.5">Connect With Us</div>

          <div className="sm:px-1 space-y-2 ">
            <div className="flex items-center space-x-2 text-sm font-normal">
              <div>Phone Number:</div>
              {/* PHONE BUTTON */}
              <PhoneCallButton phoneNumber={entityInfos.entity_phone_number} />
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex text-sm font-normal">Social Medias:</div>
              <div className="flex items-center space-x-2">
                {/* INSTAGRAM BUTTON */}
                {entityInfos.is_instagram_url_public && (
                  <InstagramButton url={entityInfos.instagram_link} />
                )}
                {/* FACEBOOK BUTTON */}
                {entityInfos.is_facebook_url_public && (
                  <FacebookButton url={entityInfos.facebook_link} />
                )}
                {/* WHATSAPP BUTTON */}
                {entityInfos.is_whatsapp_number_public && (
                  <TextUsWhatsappButton
                    phoneNumber={entityInfos.whatsapp_phone_number}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
