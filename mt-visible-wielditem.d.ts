
import { MtItemName, MtVec3 } from "@repcomm/mt-api";

export interface ItemTweak {
  position: MtVec3;
  rotation: MtVec3;
  scale: MtVec3;
}

declare global {

  interface ItemTweaksNamedMap {
    [key: MtItemName]: Partial<ItemTweak>;
  }

  interface ItemTweaks {
    names: ItemTweaksNamedMap;
  }

  interface Attachment {
    bonename: string;
    /**Node/meters*/
    position: MtVec3;
    /**Degrees*/
    rotation: MtVec3;
    /**Node/meters*/
    scale: MtVec3;
  }

  //TODO - make sure values are right type
  interface TweakTypeMap {
    unknown: ItemTweak;
    node: ItemTweak;
    tool: ItemTweak;
    craftitem: ItemTweak;
  }

  interface ModelAttachments {
    [model_file: string]: Attachment;
    /**character.b3d*/
    default: Attachment;
  }

  //TODO - make sure values are right type
  interface TweakGroups {
    [itemGroupName: string]: ItemTweak;
  }

  interface TweakItemNameMap {
    [itemName: string]: ItemTweak;
  }

  interface VisibleWieldItemGlobal {
    /**Registers a new armor item.*/
    item_tweaks: ItemTweaks;
    get_attachment (this: void, modelname: string, itemname: string): Attachment;
    model_attachments: ModelAttachments;
    types: Partial<TweakTypeMap>;
    groups: Partial<TweakGroups>;
    names: TweakItemNameMap;
  }

  const visible_wielditem: VisibleWieldItemGlobal;
}
