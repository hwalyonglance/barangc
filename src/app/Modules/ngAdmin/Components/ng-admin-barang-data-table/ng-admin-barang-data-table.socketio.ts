import { Item } from '../../../../Interfaces/item';
export function $Socket($this) {
	$this.$Socket.on('Item.Data.get', (Items: Item[]) => $this.$Items = Items);
	$this.$Socket.on('Item.Data.add', (Item: Item) => {
		$this.$Items.unshift(Item);
	});
	$this.$Socket.on('Item.Data.update', (Item: Item) => {
		$this.$Items = $this.$Items.map(($Item: Item) => {
			console.log($Item.UUID, Item.UUID);
			return $Item.UUID === Item.UUID ? Item : $Item;
		});
	});
	$this.$Socket.on('Item.Data.delete', (UUID: string) => {
		$this.$Items = $this.$Items.filter(($Item) => {
			return $Item.UUID !== UUID;
		});
	});
}
