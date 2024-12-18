"use client";

import FacebookButton from "../ConnectWithUsButtons/FacebookButton";
import InstagramButton from "../ConnectWithUsButtons/InstagramButton";
import PhoneCallButton from "../ConnectWithUsButtons/PhoneCallButton";
import TextUsWhatsappButton from "../ConnectWithUsButtons/TextUsWhatsappButton";

export default function EntityPageContainerWithEntityInfos({ entityInfos }) {
  return (
    <div className=" mb-5 flex-none rounded-lg bg-white px-3 py-4 drop-shadow-xl sm:mb-0 sm:w-[307px] sm:px-6 sm:pb-6">
      <div className="flex flex-col justify-between space-y-3 font-semibold sm:space-y-4">
        {/* ENTITY TAGS DIV */}
        <div>
          <div>Entity Tags</div>
          <div className="grid grid-flow-col grid-rows-2 gap-2 overflow-auto pb-3 pt-2 sm:gap-2 sm:pb-3 sm:pt-2">
            {entityInfos.entity_tags?.map((tag, index) => (
              <div
                key={index}
                className="mr-3  flex w-fit rounded-xl bg-gray-200 px-4 py-1 text-xs text-black drop-shadow-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* OPENING HOURS DIV */}
        <div>
          <div className=" sm:-mt-5 sm:py-1">Opening Hours</div>
          <div className="divide-y sm:px-1">
            <div className="flex justify-between">
              <div className="text-xs font-normal">Monday-Friday</div>
              <div className="text-xs font-normal">8:00A.M-10:00P.M</div>
            </div>
            <div className="flex justify-between">
              <div className="text-xs font-normal">Saturday-Sunday</div>
              <div className="text-xs font-normal">8:00A.M-5:00P.M</div>
            </div>
          </div>
        </div>
        {/* ADDRESS DIV */}
        <div>
          <div>Address</div>
          <div className="sm:px-1">
            <div className="text-xs font-normal">
              {entityInfos.entity_address}
            </div>
            {/* GOOGLE MAPS */}
            <div className="h-36 rounded-lg bg-gray-200"></div>
          </div>
        </div>

        {/* CONNECT WITH US DIV */}
        <div>
          <div className="pb-0.5">Connect With Us</div>

          <div className="space-y-2 sm:px-1 ">
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
                    off={false}
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
